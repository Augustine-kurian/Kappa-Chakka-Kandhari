// import { CONTACT, WEB3FORMS_KEY } from '../data/site.js'

/**
 * Sends a form enquiry by email to info@kappachakkakandhari.com.
 * Uses Web3Forms when WEB3FORMS_KEY is set (recommended), otherwise FormSubmit.
 * Returns { ok: boolean, message: string } – message is the service's own reply,
 * so problems (e.g. "form needs activation") are shown on screen.
 */
export default async function sendEnquiry(fields) {
  const subject = `New enquiry from KCK website – ${fields.Location || ''}`.trim()

  try {
    if (WEB3FORMS_KEY) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'Kappa Chakka Kandhari Website',
          replyto: fields.Email,
          ...fields,
        }),
      })
      const data = await res.json().catch(() => ({}))
      return { ok: res.ok && data.success === true, message: data.message || `Error ${res.status}` }
    }

    // Fallback: FormSubmit (first ever submission sends an "Activate Form" email to the inbox)
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...fields, _subject: subject, _replyto: fields.Email, _template: 'table', _captcha: 'false' }),
    })
    const data = await res.json().catch(() => ({}))
    const ok = res.ok && String(data.success) === 'true'
    return { ok, message: data.message || `Error ${res.status}` }
  } catch (err) {
    console.error('Form submission failed:', err)
    return { ok: false, message: 'Network error – please check your internet connection and try again.' }
  }
}
