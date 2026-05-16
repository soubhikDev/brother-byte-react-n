import React, { useState } from 'react'
import './SignUp.css'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import BrotherByteLOGO from '../../assets/BrotherByteLOGO.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



export default function SignUp() {
  const navigate = useNavigate()



  // Single useState for all form data
  const [form, setForm] = useState({
    userName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  })

  // Single useState for all errors
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)



  // ─── Validate single field ───────────────────────────────────────────────────
  const validateField = (name, value) => {
    switch (name) {
      case 'userName':
        if (!value.trim()) return 'User Name is required'
        if (value.trim().length < 3) return 'User Name must be at least 3 characters'
        return ''

      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address'
        return ''

      case 'number':
        if (!value.trim()) return 'Number is required'
        if (!/^\d{10}$/.test(value)) return 'Enter a valid 10-digit number'
        return ''

      case 'password':
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters'

        return ''

      case 'confirmPassword':
        if (!value) return 'Confirm Password is required'
        if (value !== form.password) return 'Passwords do not match'
        return ''

      default:
        return ''
    }
  }

  // ─── Handle change — updates form data & clears error on type ────────────────
  const handleChange = (e) => {
    const { name, value } = e.target

    setForm(prev => ({ ...prev, [name]: value }))

    // Clear error as user types
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // ─── Validate all fields on submit ───────────────────────────────────────────
  const validateAll = () => {
    const newErrors = {}
    let isValid = true

    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key])
      newErrors[key] = error
      if (error) isValid = false
    })

    setErrors(newErrors)
    return isValid
  }

  // ─── Submit handler ───────────────────────────────────────────────────────────
  const handleSubmit = () => {
    if (!validateAll()) return

    dispatch(CustomerSignUp({
      payload: {
        name: form.userName,
        email: form.email,
        phone: form.number,
        password: form.password
      }
    }))
  }

  return (
    <>
      <div className="SigninWrpr">
        <div className="signInForm">
          <Button variant="contained" size="small" className='SigninBackHomeBTN' onClick={() => navigate('/sign-in')}>
            <KeyboardArrowLeftIcon />
          </Button>
          <img src={BrotherByteLOGO} alt="Logo" />
          <h2>Sign Up</h2>

          <TextField
            fullWidth
            label="User Name"
            name="userName"
            type="text"
            variant="outlined"
            value={form.userName}
            onChange={handleChange}
            error={!!errors.userName}
            helperText={errors.userName}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Number"
            name="number"
            variant="outlined"
            value={form.number}
            onChange={handleChange}
            error={!!errors.number}
            helperText={errors.number}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            type={showPassword ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(prev => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            type={showPasswordConfirm ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPasswordConfirm(prev => !prev)}
                      edge="end"
                    >
                      {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Sign Up
            </Button>

        </div>
      </div>
    </>
  )
}