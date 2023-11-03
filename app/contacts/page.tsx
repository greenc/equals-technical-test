import { Contact } from '@/app/lib/definitions'
import ContactList from '@/app/ui/contacts/ContactList'
import { getContacts } from '@/app/lib/actions'
import styles from './contacts.module.css'

export default async function Page() {
  const contacts: Contact[] = await getContacts()
  return (
    <div className={styles.pageContainer}>
      <ContactList contacts={contacts} />
    </div>
  )
}