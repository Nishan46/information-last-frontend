import React from 'react'
import './BirthDay.css'

function BirthDay(props) {
  return (
    <div className='birthday'>
        <input name={props.name} type="date" />
    </div>
  )
}

export default BirthDay