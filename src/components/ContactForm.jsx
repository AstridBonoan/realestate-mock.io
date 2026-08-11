import { useState } from 'react'
import { Button } from './SectionHeading'
import SuccessModal, { FormField } from './SuccessModal'

const inquiryTypes = [
  'General Inquiry',
  'Membership',
  'Investment',
  'Rental Property',
  'Partnership',
  'Property Owner',
  'Other',
]

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  inquiryType: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'First name is required'
  if (!values.lastName.trim()) errors.lastName = 'Last name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Enter a valid email address'
  if (!values.subject.trim()) errors.subject = 'Subject is required'
  if (!values.inquiryType) errors.inquiryType = 'Please select an inquiry type'
  if (!values.message.trim()) errors.message = 'Message is required'
  else if (values.message.trim().length < 10)
    errors.message = 'Please provide a bit more detail'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true)
      setValues(initial)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={onChange}
            error={errors.firstName}
            required
          />
          <FormField
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={onChange}
            error={errors.lastName}
            required
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            required
          />
          <FormField
            id="phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            error={errors.phone}
          />
        </div>
        <FormField
          id="subject"
          label="Subject"
          value={values.subject}
          onChange={onChange}
          error={errors.subject}
          required
        />
        <FormField
          id="inquiryType"
          label="Inquiry Type"
          as="select"
          value={values.inquiryType}
          onChange={onChange}
          error={errors.inquiryType}
          required
          options={inquiryTypes}
        />
        <FormField
          id="message"
          label="Message"
          as="textarea"
          value={values.message}
          onChange={onChange}
          error={errors.message}
          required
          rows={5}
        />
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        title="Message Sent"
        message="Thank you for reaching out. A member of our team will respond to your inquiry shortly."
      />
    </>
  )
}
