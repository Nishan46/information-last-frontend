import React from 'react'
import './REG_PERSONAL.css'
import {TextField , Stack, RadioGroup ,FormControlLabel, FormControl, Button} from '@mui/material'
import { DesktopDatePicker ,LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox';
import { useEffect ,  useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function REG_PERSONAL() {
  const [value, setValue] = useState(dayjs('2022-08-18T21:11:54'));
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [isphotography,setPhotography] = useState(false) 
  const [isvideography,setVideography] = useState(false) 
  const [istechnical,setTechnical] = useState(false) 
  const [isannouncing,setAnnouncing] = useState(false) 
  const [isreporting,setReporting] = useState(false) 
  const [isphotoediting,setPhotoediting] = useState(false) 
  const [isvideoediting,setVideoediting] = useState(false) 
  const [isgraphicdesigning,setGraphicDesigning] = useState(false) 
  const [iswebdesigning,setWebdesigning] = useState(false) 

  return (
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

          <label htmlFor='txtindex'>Index Number</label>
          <TextField id='txtindex' fullWidth label='Index Number'/>

          <label htmlFor='gndbox'>Gender</label>
          <div className='gender-container'>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="male" control={<Radio size='small'/>} label="Male" />
              <FormControlLabel value="female" control={<Radio size='small'/>} label="Female" />
              <FormControlLabel value="other" control={<Radio size='small'/>} label="Other" />
            </RadioGroup>
          </FormControl>
          </div>
          <label>Categories Your Interested</label>
          <div className='category-container'>
              <label><Checkbox onChange={(e)=>{console.log(e.target.checked)}} {...label}  size='small' />Photography </label>
              <label><Checkbox {...label}  size='small' />Videography</label>
              <label><Checkbox {...label}  size='small' />Technical </label>
              <label> <Checkbox {...label}  size='small' />Announcing</label>
              <label> <Checkbox {...label}  size='small' />Reporting</label>
              <label><Checkbox {...label}  size='small' />Photo & Video Editing </label>
              <label><Checkbox {...label}  size='small' />Graphic Designing </label>
              <label><Checkbox {...label}  size='small' />Web Designing </label>
          </div>
        </form>
  )
} 

export default REG_PERSONAL