import React from 'react'
import './SearchPNR.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import IRCTC_LOGO from '../../assets/IRCTC_LOGO.png'

export default function SearchPNR() {
    const [pnr, setPnr] = React.useState('PNR');

    const handleChange = (event) => {
        setPnr(event.target.value);
    };

  return (
    <>
        <div className="Search_wrpr">
            <h1 className="CommonHeader">Order Food <span>Delivery in Train</span></h1>
            <Box sx={{ minWidth: 120 }} className='PNR_Search_wrpr'>
                <FormControl className='PNR_Search'>
                    <InputLabel id="demo-simple-select-label">{pnr}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pnr}
                        label={pnr}
                        onChange={handleChange}
                    >
                        <MenuItem value="PNR">PNR</MenuItem>
                        <MenuItem value="Train">Train</MenuItem>
                        <MenuItem value="Station">Station</MenuItem>
                    </Select>

                    <TextField id="outlined-basic" label={`Enter ${pnr} ${pnr === 'Station'? 'Code' : 'Number'}`} variant="outlined" />
                    <button className='CommonBTN'>Order Now</button>
                </FormControl>
            </Box>
            <h2 className="irctc"><span>Most Trusted Partner Of IRCTC</span> <img src={IRCTC_LOGO} /></h2>
        </div>
    </>
  )
}
