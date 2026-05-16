import React, { useState } from 'react'
import './PartnerEnquiry.css'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { LocationsData } from '../../../LocationsData'

// const STATION_OPTIONS = [
//   'New Delhi',
//   'Mumbai Central',
//   'Howrah Junction',
//   'Chennai Central',
//   'Bengaluru City',
//   'Hyderabad Deccan',
//   'Ahmedabad Junction',
//   'Pune Junction',
// ]

const initialState = {
  name: '',
  email: '',
  contact: '',
  subject: '',
  station: '',
  restaurant: '',
  message: '',
}

export default function PartnerEnquiry() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const fieldProps = (name, label, type = 'text') => ({
    name,
    label,
    type,
    value: form[name],
    onChange: handleChange,
    variant: 'outlined',
    fullWidth: true,
    size: 'medium',
  })

  return (
    <section className="PartnerEnquiry">
      <div className="common_width PartnerEnquiry_inner">

        {/* Header */}
        <div className="PartnerEnquiry_header">
          <div className="CommonEyebrow">Get In Touch</div>
          <h2 className="CommonHeader">
            Partner Enquiry <span>Brother Byte</span>
          </h2>
          <p>Please leave your contact details and we'll reach you within 24 hours.</p>
        </div>

        {/* Card */}
        <div className="PartnerEnquiry_card">
          {submitted ? (
            <div className="PartnerEnquiry_success">
              <div className="check">✅</div>
              <h3>Enquiry Submitted!</h3>
              <p>
                Thank you, <strong>{form.name || 'Partner'}</strong>. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="PartnerEnquiry_grid">

                {/* Row 1 */}
                <TextField {...fieldProps('name', 'Name')} required />
                <TextField {...fieldProps('email', 'E-Mail ID', 'email')} required />

                {/* Row 2 */}
                <TextField {...fieldProps('contact', 'Contact No.', 'tel')} required />
                <TextField {...fieldProps('subject', 'Subject')} required />

                {/* Row 3 */}
                <TextField
                  {...fieldProps('station', 'Select Station Name')}
                  select
                  required
                >
                  {LocationsData.map((s , index) => (
                    <MenuItem key={index} value={s.name}>
                      {s.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps('restaurant', 'Restaurant Name')} required />

                {/* Row 4 — full width */}
                <TextField
                  {...fieldProps('message', 'Additional Message (Optional)')}
                  multiline
                  rows={3}
                  className="full"
                />

              </div>

              <div className="PartnerEnquiry_actions">
                <button
                  type="submit"
                  className={`CommonBTN${loading ? ' loading' : ''}`}
                >
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                  {!loading && <span className="arrow">→</span>}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
