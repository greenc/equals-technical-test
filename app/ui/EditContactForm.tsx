'use client'

import { updateContact } from '@/app/lib/actions'
import { Contact } from '@/app/lib/definitions'
import Link from 'next/link'

export default function Form({
  contact,
}: {
  contact: Contact
}) {
  const updateContactWithId = updateContact.bind(null, contact.id)

  return (
    <form action={updateContactWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Contact Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <input
                id="name"
                name="name"
                type="text"
                defaultValue={contact.name}
                placeholder="Joe Bloggs"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
                id="email"
                name="email"
                type="text"
                defaultValue={contact.email}
                placeholder="name@email.com"
            />
          </div>
        </div>

        {/* Contact Phone */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <div className="relative">
            <input
                id="phone"
                name="phone"
                type="text"
                defaultValue={contact.phone}
                placeholder="0123456789"
            />
          </div>
        </div>

        {/* Contact Birthday */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Birthday
          </label>
          <div className="relative">
            <input
                id="birthday"
                name="birthday"
                type="text"
                defaultValue={contact.birthday}
                placeholder="21/09/1989"
            />
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/contacts"
        >
          Cancel
        </Link>
        <button type="submit" className="button">Save Changes</button>
      </div>
    </form>
  )
}