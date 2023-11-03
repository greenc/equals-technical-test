import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {

  return (
    <main className={styles.main}>
      <h1>Equals Technical Test: Contact Cards App</h1>
      <br />
      <p>This was a pretty meaty test which took up a fair bit more time than I had planned against; as such I am submitting it in a state I'm not totally happy with.</p>
      <h3>Known Issues:</h3>
      <ul>
        <li>Editing and deleting contacts does not trigger a NextJS cache invalidation and refresh due to an issue with <code>invalidatePath()</code> in <code>actions.ts</code> that I did not have time to track down.</li>
        <li>While the <code>POST</code> request for updating a contact appears to be correct with a valid payload, MockApi apparently ignores it, so the fields remain unchanged.</li>
        <li>Some page transitions appear to cause a redownload of the main NextJS bundle which is not great. I'm fairly inexperienced with the framework, but I'm sure this would be easily solvable given a bit more time.</li>
        <li>CSS could be better segregated/cascaded. I went with CSS modules instead of Tailwind which may have been the wrong choice given the time constraints.</li>
        <li>The 2 and 3 column "masonry" layouts rely on a fixed height for the container in order to force column wrapping of the cards. This is not ideal since an excess of cards may overflow the container and/or not be visible.</li>
        <li>No tests! This is the one I'm most unhappy about, but I cannot reasonably dedicate any more time to this task. I ended up deciding to implement all features to some level of completion instead of only implementing a few but with a higher level of completion.</li>
      </ul>

      <h3>Questions:</h3>
      <ul>
        <li>I believe the (worst case) time complexity of the card search, which loops over each item and performs a <code>String.prototype.includes()</code> match is O(l*n) for each substring search and O(n) for the main loop.<br />
          Using a less naive search algorithm (e.g. KMP) could help reduce time complexity. Using a hashmap as a data structure, where each searchable word or sequence within a string is a key could improve time efficiency at the expense of space complexity.
        </li>
      </ul>
      <Link
        key="Contacts"
        href="/contacts"
      >
        <p className="button">Go to Contacts page</p>
      </Link>
    </main>
  )
}
