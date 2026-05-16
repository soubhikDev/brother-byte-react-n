
import './SignIn.css'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import BrotherByteLOGO from '../../assets/BrotherByteLOGO.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function SignIn() {
  const [form, setForm] = useState({
    userName: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    userName: '',
    password: ''
  })



  const handleSignIn = () => {
  let newErrors = { userName: '', password: '' };

  if (!form.userName) {
    newErrors.userName = 'Username is required';
  }
  if (!form.password) {
    newErrors.password = 'Password is required';
  }

  setErrors(newErrors);

  // Stop if any error exists
  if (newErrors.userName || newErrors.password) return;

  dispatch(CustomerSignIn({
    payload: {
      email: form.userName,
      password: form.password
    }
  }));
};

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();


  return (
    <>
      <div className="SigninWrpr">
        <div className="signInForm">
          <Button variant="contained" size="small" className='SigninBackHomeBTN' onClick={() => navigate('/')}>
            <KeyboardArrowLeftIcon />
          </Button>
          <img src={BrotherByteLOGO} alt="Logo" />
          <h2>Sign In</h2>
          <TextField fullWidth id="outlined-basic" label="User Name" variant="outlined" value={form.userName} onChange={(e) => setForm({ ...form, userName: e.target.value })} error={!!errors.userName} helperText={errors.userName}/>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            error={!!errors.password}
            helperText={errors.password}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <NavLink className="sign-up-link" to="/sign-up">
            Don't have an account? <span>Sign Up</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}
