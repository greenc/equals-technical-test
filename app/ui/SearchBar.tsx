'use client'

import styles from './SearchBar.module.css'

interface SearchBarProps {
  query: string
  setQuery: (value: string) => void
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="search">Search contacts by name:</label>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="Joe Bloggs"
        value={query} onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
