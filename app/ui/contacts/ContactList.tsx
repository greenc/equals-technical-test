'use client'

import { useState } from 'react'
import { Contact } from '@/app/lib/definitions'
import { ContactCard } from './ContactCard'
import SearchBar from '@/app/ui/SearchBar'
import styles from './contacts.module.css'

interface ContactListProps {
  contacts: Contact[]
}

export default function ContactList({ contacts }: ContactListProps) {
  const [filter, setFilter] = useState<string>('')
  return (
    <>
      <SearchBar query={filter} setQuery={setFilter} />
      <ul className={styles.contactsList}>
        {contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())).map((contact: Contact) => {
          return (
            <ContactCard
              data={contact}
              key={contact.name}
            />
          )
        })}
      </ul>
    </>
  )
}
