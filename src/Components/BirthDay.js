import React from 'react'
import './BirthDay.css'

function BirthDay(props) {
  return (
    <div className='birthday'>
        <input onChange={props.onChange} name={props.name} type="date" value={props.value}/>
    </div>
  )
}

export default BirthDay