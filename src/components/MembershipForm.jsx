import { useState } from 'react'
import { interestAreas } from '../data/content'
import { Button } from './SectionHeading'
import SuccessModal, { FormField } from './SuccessModal'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  occupation: '',
  interest: '',
  areas: '',
  referral: '',
  comments: '',
  consent: false,
}

function validate(values) {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'First name is required'
  if (!values.lastName.trim()) errors.lastName = 'Last name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Enter a valid email address'
  if (!values.phone.trim()) errors.phone = 'Phone number is required'
  if (!values.city.trim()) errors.city = 'City is required'
  if (!values.state.trim()) errors.state = 'State is required'
  if (!values.occupation.trim()) errors.occupation = 'Occupation is required'
  if (!values.interest.trim()) errors.interest = 'Please share your interest'
  if (!values.areas) errors.areas = 'Please select an area of interest'
  if (!values.referral.trim()) errors.referral = 'Please tell us how you heard about us'
  if (!values.consent) errors.consent = 'Consent is required to proceed'
  return errors
}

export default function MembershipForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
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
      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-6 border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={onChange}
            error={errors.firstName}
            required
            placeholder="Jordan"
          />
          <FormField
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={onChange}
            error={errors.lastName}
            required
            placeholder="Ellis"
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            required
            placeholder="you@example.com"
          />
          <FormField
            id="phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            error={errors.phone}
            required
            placeholder="(555) 000-0000"
          />
          <FormField
            id="city"
            label="City"
            value={values.city}
            onChange={onChange}
            error={errors.city}
            required
            placeholder="New York"
          />
          <FormField
            id="state"
            label="State"
            value={values.state}
            onChange={onChange}
            error={errors.state}
            required
            placeholder="NY"
          />
        </div>

        <FormField
          id="occupation"
          label="Occupation"
          value={values.occupation}
          onChange={onChange}
          error={errors.occupation}
          required
          placeholder="Investor, entrepreneur, professional…"
        />

        <FormField
          id="interest"
          label="Why are you interested in becoming a member?"
          as="textarea"
          value={values.interest}
          onChange={onChange}
          error={errors.interest}
          required
          placeholder="Share what draws you to our network…"
        />

        <FormField
          id="areas"
          label="Areas of real estate interest"
          as="select"
          value={values.areas}
          onChange={onChange}
          error={errors.areas}
          required
          options={interestAreas}
        />

        <FormField
          id="referral"
          label="How did you hear about us?"
          value={values.referral}
          onChange={onChange}
          error={errors.referral}
          required
          placeholder="Referral, event, social, search…"
        />

        <FormField
          id="comments"
          label="Additional comments"
          as="textarea"
          value={values.comments}
          onChange={onChange}
          placeholder="Anything else we should know?"
        />

        <div className="flex flex-col gap-2">
          <label className="flex items-start gap-3 text-sm text-slate">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={onChange}
              className="mt-1 h-4 w-4 accent-brass"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span>
              I agree to be contacted by Meridian Collective regarding membership and
              related opportunities.
              <span className="ml-1 text-brass" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="text-xs text-red-600" role="alert">
              {errors.consent}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Submit Application
        </Button>
      </form>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        title="Application Received"
        message="Thank you for your interest in Meridian Collective. Our membership team will review your application and follow up shortly."
      />
    </>
  )
}
