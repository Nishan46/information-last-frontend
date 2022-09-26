import React from 'react'
import './REG_PERSONAL.css'
import {TextField , Stack, RadioGroup ,FormControlLabel, FormControl, Button , FormLabel} from '@mui/material'
import { DesktopDatePicker ,LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox';
import { useEffect ,  useState } from 'react';
import Genders from './Genders';
import BirthDay from './BirthDay'

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

  const HandleSubmit = (event) =>{
    event.preventDefault();
    console.log('submitted');
  }

  return (
    <form onSubmit={HandleSubmit}>
          <label htmlFor='txtmail'>Email Adress</label>
          <TextField id='txtmail' name='txtmail' fullWidth label='Email Adress'/>

          <label htmlFor='txtfirst'>First Name</label>
          <TextField id='txtfirst' fullWidth label='First Name'/>

          <label htmlFor='txtlast'>Last Name</label>
          <TextField id='txtlast' fullWidth label='Last Name'/>

          <label htmlFor='txtfull'>Full Name</label>
          <TextField id='txtfull' fullWidth label='Last Name'/>

          <label htmlFor='txtbirth'>Birth Day</label>
          <div className='birth-container'>
            <BirthDay/>
          </div>
          <label htmlFor='txtaddress'>Address</label>
          <TextField id='txtaddress' fullWidth label='Address'/>

          <label htmlFor='txtgrade'>Grade</label>
          <TextField id='txtgrade' fullWidth label='Grade'/>

          <label htmlFor='txtindex'>Index Number</label>
          <TextField id='txtindex' fullWidth label='Index Number'/>

          <label htmlFor='gndbox'>Gender</label>
          <div className='gender-container'>
            <Genders value='Male'/>
            <Genders value='Female'/>
            <Genders value='Other'/>
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
          <div className='btn-container'>
              <Button className='btnsubmit' type='submit' variant='contained'>Register</Button>
            </div>
        </form>
  )
} 

export default REG_PERSONAL