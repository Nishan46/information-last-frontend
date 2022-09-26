import React from 'react'
import './Genders.css'

function Genders(Props) {
  return (
    <div className="gender-conts">
        <label htmlFor={Props.value} className='radio'>
            <input id={Props.value} name='Gender' type="radio" />
            <span></span>
            {Props.value}
            
        </label>
    </div>   
  )
}

export default Genders