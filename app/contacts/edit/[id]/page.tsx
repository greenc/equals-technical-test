import { Contact } from '@/app/lib/definitions'
import Form from '@/app/ui/EditContactForm'
import { getContact } from '@/app/lib/actions'

export default async function EditContact({ params }: { params: { id: string } }) {
  const contact: Contact = await getContact(params.id)
  return <Form contact={contact} />
}