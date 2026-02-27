'use client'

import { useState } from 'react'
import brand from '../../../brand.config'
import { trackFormSubmission } from '@/components/integrations/Analytics'

/**
 * Functional contact form that works with Web3Forms or Basin.
 * Submissions are emailed directly to the business owner.
 *
 * For demo sites: set forms.accessKey to null in brand.config.js
 * and the form renders as a visual placeholder (no submission).
 *
 * For production sites:
 * - Web3Forms: get a free access key at web3forms.com
 * - Basin: get a free endpoint at usebasin.com
 */

const formTypes = {
  contact: {
    title: 'Nachricht senden',
    subtitle: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Ihr vollstandiger Name' },
      { name: 'email', label: 'E-Mail', type: 'email', required: true, placeholder: 'ihre@email.de' },
      { name: 'phone', label: 'Telefon', type: 'tel', required: false, placeholder: '+49 ...' },
      { name: 'message', label: 'Nachricht', type: 'textarea', required: true, placeholder: 'Wie konnen wir Ihnen helfen?' },
    ],
  },
  reservation: {
    title: 'Tisch reservieren',
    subtitle: 'Reservieren Sie Ihren Tisch bequem online.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Ihr Name' },
      { name: 'email', label: 'E-Mail', type: 'email', required: true, placeholder: 'ihre@email.de' },
      { name: 'phone', label: 'Telefon', type: 'tel', required: true, placeholder: '+49 ...' },
      { name: 'date', label: 'Datum', type: 'date', required: true, placeholder: '' },
      { name: 'time', label: 'Uhrzeit', type: 'time', required: true, placeholder: '' },
      { name: 'guests', label: 'Anzahl Gaste', type: 'number', required: true, placeholder: '2' },
      { name: 'message', label: 'Besondere Wunsche', type: 'textarea', required: false, placeholder: 'Allergien, Anlass, etc.' },
    ],
  },
  callback: {
    title: 'Ruckruf anfordern',
    subtitle: 'Wir rufen Sie gerne zuruck.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Ihr Name' },
      { name: 'phone', label: 'Telefon', type: 'tel', required: true, placeholder: '+49 ...' },
      { name: 'preferred_time', label: 'Bevorzugte Zeit', type: 'text', required: false, placeholder: 'z.B. vormittags' },
      { name: 'message', label: 'Worum geht es?', type: 'textarea', required: false, placeholder: 'Kurze Beschreibung' },
    ],
  },
}

export default function ContactForm({ type = 'contact', className = '' }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const forms = brand.integrations?.forms
  const isLive = forms?.accessKey && forms?.provider
  const formConfig = formTypes[type] || formTypes.contact

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isLive) {
      // Demo mode: show success without submitting
      setStatus('success')
      return
    }

    setStatus('submitting')
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      let endpoint = ''
      let body = {}

      if (forms.provider === 'web3forms') {
        endpoint = 'https://api.web3forms.com/submit'
        body = {
          access_key: forms.accessKey,
          subject: `Neue ${formConfig.title} von ${data.name || 'Unbekannt'} - ${brand.business.name}`,
          from_name: brand.business.name,
          ...data,
        }
      } else if (forms.provider === 'basin') {
        endpoint = `https://usebasin.com/f/${forms.accessKey}`
        body = data
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        setStatus('success')
        trackFormSubmission(type, { form_name: formConfig.title })
        e.target.reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`bg-white rounded-brand p-8 shadow-brand-md text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold mb-2">Vielen Dank!</h3>
        <p className="text-brand-muted">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kurze bei Ihnen.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-brand-primary font-semibold hover:text-brand-primary-dark transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-brand p-8 shadow-brand-md ${className}`}>
      <h3 className="text-xl font-heading font-bold mb-1">{formConfig.title}</h3>
      <p className="text-brand-muted text-sm mb-6">{formConfig.subtitle}</p>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-brand p-4 mb-6 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden fields for Web3Forms */}
        {forms?.provider === 'web3forms' && (
          <input type="hidden" name="botcheck" value="" />
        )}

        {formConfig.fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-brand-dark mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-3 rounded-brand border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-brand-dark placeholder:text-gray-400 resize-none"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-brand border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-brand-dark placeholder:text-gray-400"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-3 px-6 rounded-brand transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-brand-md hover:shadow-brand-lg active:scale-[0.97]"
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wird gesendet...
            </span>
          ) : (
            'Absenden'
          )}
        </button>

        {!isLive && (
          <p className="text-xs text-gray-400 text-center mt-2">
            Demo-Modus: Formular ist noch nicht mit einem Backend verbunden.
          </p>
        )}
      </form>
    </div>
  )
}
