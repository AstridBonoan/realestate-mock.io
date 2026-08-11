import { useEffect, useRef } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { Button } from './SectionHeading'

export default function SuccessModal({ open, onClose, title, message }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md animate-fade-up bg-ivory p-8 shadow-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-muted transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center text-center">
          <CheckCircle2 className="h-14 w-14 text-brass" aria-hidden="true" />
          <h3
            id="success-modal-title"
            className="mt-5 font-display text-3xl font-medium text-navy"
          >
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">{message}</p>
          <Button onClick={onClose} variant="primary" className="mt-8">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
  as = 'input',
  options,
  rows = 4,
}) {
  const baseInput =
    'w-full border bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-muted/70 focus:border-brass focus:ring-1 focus:ring-brass'

  const border = error ? 'border-red-500' : 'border-border'

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {required && (
          <span className="ml-1 text-brass" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${baseInput} ${border} resize-y min-h-[110px]`}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${baseInput} ${border}`}
        >
          <option value="">Select an option</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${baseInput} ${border}`}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
