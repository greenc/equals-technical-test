'use client'
import Link from 'next/link'
import Image from 'next/image'
import { deleteContact } from '@/app/lib/actions'
import { useState } from 'react'
import { Contact } from '@/app/lib/definitions'
import styles from './contacts.module.css'

interface ContactCardProps {
  data: Contact
}

export function ContactCard({ data }: ContactCardProps) {
  const deleteContactWithId = deleteContact.bind(null, data.id)
  const [expanded, setExpanded] = useState<boolean>()
  const handleClick = () => {
    setExpanded(!expanded)
  }
  return (
    <li className={styles.contactsListItem} onClick={handleClick}>
      <div className={styles.primaryDetails}>
        <h3 className={styles.name}>{data.name}</h3>
        <Image
          src={data.avatar}
          width={90}
          height={90}
          alt="Picture of the contact person"
          className={styles.avatar}
        />
      </div>
      <div className={`${styles.secondaryDetails} ${!expanded ? 'hide' : ''}`}>
        <table className={styles.detailsTable}>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>{data.createdAt}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <td>Birthday:</td>
              <td>{data.birthday}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.actions}>
          <Link className="button" href={`/contacts/edit/${data.id}`}>Edit Contact</Link>
          <button className="button danger" onClick={deleteContactWithId}>Delete Contact</button>
        </div>
      </div>
    </li>
  )
}