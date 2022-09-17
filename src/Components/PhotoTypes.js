import React from 'react'
import './PhotoTypes.css'
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PhotoTypes() {
  return (
    <div className='ds-container'>
       <label><Checkbox {...label}  size='small' />DSLR / MIRRORLESS </label>
       <label><Checkbox {...label}  size='small' />ARIAL PHOTOGRAPHY</label>
       <label><Checkbox {...label}  size='small' />MOBILE PHOTOGRAPHY</label>
    </div>
  )
}

export default PhotoTypes