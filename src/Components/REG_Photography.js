import React from 'react'
import {TextField} from '@mui/material'
import './REG_Photography.css'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function REG_Photography() {
  return (
    <div className='reg-form'>
        <div className='form-data'>
            <form>
                <p>Choose Paths</p>
                <div className='ds-container'>
                  <label><Checkbox {...label}  size='small' />DSLR / MIRRORLESS </label>
                  <label><Checkbox {...label}  size='small' />ARIAL PHOTOGRAPHY</label>
                  <label><Checkbox {...label}  size='small' />MOBILE PHOTOGRAPHY</label>
                </div>
                <label>{'PHOTOGRAPHY(DSLR / MIRRORLESS)'}</label>
                <div className='dslr-mirrorless'>
                <label>Type of Camera</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={5}
                      placeholder="Types of Camera you have"
                      style={{width:'100%'}}
                    />
                  </div>

                  <label>Type of Lens</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Types of Lens you have"
                      style={{width:'100%'}}
                    />
                  </div>
                  <label>Type of Equipments</label>
                  <div className='ds-container'>
                    <label><Checkbox {...label}  size='small' />Trypods</label>
                    <label><Checkbox {...label}  size='small' />Flash Guns</label>
                    <label><Checkbox {...label}  size='small' />ND Filters</label>
                    <label><Checkbox {...label}  size='small' />Troggers</label>
                    <label><Checkbox {...label}  size='small' />Softboxes</label>
                  </div>
                  <label>Some details about that above you mentioned</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Say something about you mentioned before"
                      style={{width:'100%'}}
                    />
                  </div>
                  <label>Skills and Experiance you have</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={8}
                      placeholder="Skills"
                      style={{width:'100%'}}
                    />
                  </div>
                
                </div>
                <label>{'PHOTOGRAPHY(ARIAL)'}</label>
                <div className='dslr-mirrorless'>
                  <label>Type of Drones</label>
                    <div className='dslr-mirrorless-container'> 
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Types of Camera you have"
                        style={{width:'100%'}}
                      />
                    </div>
                    
                    <div className='ds-container' style={{'justify-content':'flex-start'}}>
                        <label><Checkbox {...label}  size='small' />Is your Drone Registerd at Civil Aviation Authority of Sri Lanka</label>
                    </div>
                    <label>Skills and Experiance you have</label>
                    <div className='dslr-mirrorless-container'> 
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Skills"
                        style={{width:'100%'}}
                      />
                  </div>
                </div>
                <label>{'PHOTOGRAPHY(MOBILE)'}</label>
                <div className='dslr-mirrorless'>
                  <div className='dslr-mirrorless-container'>
                    
                  <Alert variant="filled" severity="warning" sx={{width:'100%'}}>
                    Your mobile device must have some capabilities with photography
                  </Alert>
                  </div>
                  <label>Mobiles</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Devices you have"
                      style={{width:'100%'}}
                    />
                  </div>
                  <label>Skills and Experiance you have</label>
                  <div className='dslr-mirrorless-container'> 
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Skills"
                      style={{width:'100%'}}
                    />
                  </div>
                </div>
                <div className='btn-next'>
                  <Button variant='contained'>next Step</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default REG_Photography