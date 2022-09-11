import React from 'react'
import './REG_PERSONAL.css'
import {TextField , Stack, RadioGroup ,FormControlLabel} from '@mui/material'
import { DesktopDatePicker ,LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'

function REG_PERSONAL() {
  const [value, setValue] = React.useState(dayjs('2022-08-18T21:11:54'));

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue.toString())
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='reg-form'>
      <div className='form-data'>
        <form>
          <label htmlFor='txtmail'>Email Adress</label>
          <TextField id='txtmail' fullWidth label='Email Adress'/>

          <label htmlFor='txtfirst'>First Name</label>
          <TextField id='txtfirst' fullWidth label='First Name'/>

          <label htmlFor='txtlast'>Last Name</label>
          <TextField id='txtlast' fullWidth label='Last Name'/>

          <label htmlFor='txtfull'>Full Name</label>
          <TextField id='txtfull' fullWidth label='Last Name'/>

          <label htmlFor='txtbirth'>Birth Day</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={10}>
            <DesktopDatePicker
              id='txtbirth'
              label="Birth Day"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <label htmlFor='txtaddress'>Address</label>
          <TextField id='txtaddress' fullWidth label='Address'/>
          <label htmlFor='txtgrade'>Grade</label>
          <TextField id='txtgrade' fullWidth label='Grade'/>
          <div className='gender-container'>
            <Box sx={{ display: 'flex', gap: 2 , alignItems:'center'}}>
              GENDER 
              <FormControlLabel label='Male' control={
                  <Radio
                  id='rmale'
                  checked={selectedValue === 'Male'}
                  onChange={handleChange2}
                  value="Male"
                  name="radio-buttons"
                  size='small'
                  sx={{width:'2px',height:'2px' ,marginLeft:'20px'}}
                  componentsprops={{ input: { 'aria-label': 'A'} }}

                />
              }/>
              <FormControlLabel label='Female' control={
                <Radio
                id='rmfemale'
                checked={selectedValue === 'Female'}
                onChange={handleChange2}
                value="Female"
                name="radio-buttons"
                size='small'
                sx={{width:'2px',height:'2px'}}
                componentsprops={{ input: { 'aria-label': 'A'} }}
              />
              }/>

            </Box>
          </div>
        </form>
      </div>
    </div>
  )
} 

export default REG_PERSONAL