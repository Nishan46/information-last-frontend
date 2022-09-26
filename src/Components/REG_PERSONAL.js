import React from 'react'
import './REG_PERSONAL.css'
import {TextField, RadioGroup ,FormControlLabel, FormControl, Button} from '@mui/material'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import BirthDay from './BirthDay'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const registerData = {user_name:"",first_name:"",last_name:"",admission_id:"",grade:"",full_name:"",email:"",phone:"",address:"",birthday:"",gender:""}



function REG_PERSONAL() {

  const [registerValues,setRegisterValues] = useState(registerData);
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
    console.log(registerValues);
  }

  const HandleChange = (e) =>{
    const {name , value} = e.target;
    setRegisterValues({...registerValues,[name]:value, user_name:`${registerValues.first_name.toLowerCase()}@${registerValues.admission_id}`});
  }
  return (
    <form onSubmit={HandleSubmit}>
          <label htmlFor='txtmail'>Email Adress</label>
          <TextField id='txtmail' name='email'  fullWidth placeholder='Email' value={registerValues.email} onChange={HandleChange}/>

          <label htmlFor='txtfirst'>First Name</label>
          <TextField id='txtfirst' name='first_name' placeholder='First Name' fullWidth value={registerValues.first_name} onChange={HandleChange}/>

          <label htmlFor='txtlast'>Last Name</label>
          <TextField id='txtlast' name='last_name' fullWidth placeholder='Last Name' value={registerValues.last_name} onChange={HandleChange}/>

          <label htmlFor='txtfull'>Full Name</label>
          <TextField id='txtfull' name='full_name' fullWidth placeholder='Full Name' value={registerValues.full_name} onChange={HandleChange}/>

          <label htmlFor='txtbirth'>Birth Day</label>
          <div className='birth-container'>
            <BirthDay value={registerValues.birthday} name='birthday' onChange={HandleChange}/>
          </div>
          <label htmlFor='txtaddress'>Address</label>
          <TextField id='txtaddress' name='address' fullWidth placeholder='Address' value={registerValues.address} onChange={HandleChange}/>

          <label htmlFor='txtgrade'>Grade</label>
          <TextField id='txtgrade' name='grade' fullWidth placeholder='Grade' value={registerValues.grade} onChange={HandleChange}/>

          <label htmlFor='txtindex'>Index Number</label>
          <TextField id='txtindex' name='admission_id' fullWidth placeholder='Index Number 'value={registerValues.admission_id} onChange={HandleChange}/>

          <label htmlFor='txtmobile'>Mobile Number</label>
          <TextField type='tel' id='txtmobile' name='phone' fullWidth placeholder='Mobile Number 'value={registerValues.phone} onChange={HandleChange}/>

          <label htmlFor='gndbox'>Gender</label>
          <div className='gender-container'>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                onChange={HandleChange}
              >
                <FormControlLabel value="Male" control={<Radio size='small'/>} label="Male" />
                <FormControlLabel value="Female" control={<Radio size='small'/>} label="Female" />
                <FormControlLabel value="Other" control={<Radio size='small'/>} label="Other" />
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
          <div className='btn-container'>
              <Button className='btnsubmit' type='submit' variant='contained'>Register</Button>
            </div>
        </form>
  )
} 

export default REG_PERSONAL