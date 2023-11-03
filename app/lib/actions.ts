import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getContacts() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/contacts`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch contacts')
    }
    return res.json()
  } catch (error) {
    return { message: 'Failed to fetch contacts' }
  }
}

export async function getContact(id: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/contacts/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch contact')
    }

    return res.json()
  } catch (error) {
    return { message: 'Failed to fetch contact' }
  }
}

export async function updateContact(id: string, formData: FormData) {
  const payload = {
    id: formData.get('contactId'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    birthday: formData.get('birthday'),
  }

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      throw new Error('Failed to update contact')
    }
  } catch (error) {
    return { message: 'Failed to update contact' }
  }

  // TODO: This causes an error:
  // "Invariant: static generation store missing in revalidateTag _N_T_/contacts"
  revalidatePath('/contacts');
  redirect('/contacts');
}

export async function deleteContact(id: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/contacts/${id}`, {
      method: 'DELETE'
    })

    if (!res.ok) {
      throw new Error('Failed to delete contact')
    }
  } catch (error) {
    return { message: 'Failed to delete contact' }
  }

  // TODO: This causes an error:
  // "Invariant: static generation store missing in revalidateTag _N_T_/contacts"
  // revalidatePath('/contacts');
}
