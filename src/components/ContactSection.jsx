import { useState } from 'react'
import { LOCATIONS, CONTACT } from '../data/site.js'
import sendEnquiry from '../utils/sendEnquiry.js'
import ambience from '../assets/images/ambience-collage.webp'
import './ContactSection.css'

const empty = { name: '', phone: '', location: 'Chennai', email: '', message: '' }

/**
 * "Get in Touch – With the Legacy" form + restaurant photo collage.
 * heading={false} hides the heading (Contact Us page)
 * reverse puts the collage on the left (Contact Us page)
 */
export default function ContactSection({ heading = true, reverse = false }) {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverMsg, setServerMsg] = useState('')

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name'
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) err.phone = 'Enter a valid phone number'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email'
    if (!form.message.trim()) err.message = 'Please enter a message'
    return err
  }

  // Sends the enquiry to info@kappachakkakandhari.com (see src/utils/sendEnquiry.js)
  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (Object.keys(err).length) return setErrors(err)

    setStatus('sending')
    const res = await sendEnquiry({
      Name: form.name,
      Phone: form.phone,
      Location: form.location,
      Email: form.email,
      Message: form.message,
      Page: window.location.pathname,
    })
    setServerMsg(res.message)
    if (res.ok) {
      setStatus('sent')
      setForm(empty)
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="section contact-sec">
      <div className={`container split ${reverse ? 'split--reverse' : ''}`}>
        <div className="contact-sec__form">
          {heading && (
            <>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="contact-sec__title">With the Legacy</h2>
            </>
          )}

          <form className="kck-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label>Name <span>*</span></label>
              <input name="name" value={form.name} onChange={onChange} />
              {errors.name && <small>{errors.name}</small>}
            </div>
            <div className="field">
              <label>Phone <span>*</span></label>
              <input name="phone" type="tel" value={form.phone} onChange={onChange} />
              {errors.phone && <small>{errors.phone}</small>}
            </div>
            <div className="field">
              <label>Select</label>
              <select name="location" value={form.location} onChange={onChange}>
                {LOCATIONS.map((l) => (
                  <option key={l.city}>{l.city}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Email <span>*</span></label>
              <input name="email" type="email" value={form.email} onChange={onChange} />
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="field field--full">
              <label>Message <span>*</span></label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} />
              {errors.message && <small>{errors.message}</small>}
            </div>
            <div className="field--full">
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'SENDING…' : 'SUBMIT'}
              </button>
              {status === 'sent' && <p className="form-success">Thank you! We will get back to you soon.</p>}
              {status === 'error' && (
                <p className="form-error">
                  Sorry, the message could not be sent{serverMsg ? ` (${serverMsg})` : ''}. Please call us or
                  email {CONTACT.email}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="contact-sec__img">
          <img src={ambience} alt="Kappa Chakka Kandhari restaurant interiors" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
