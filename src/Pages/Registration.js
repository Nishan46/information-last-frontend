import React from 'react'
import './Registration.css'
import REG_HEADER from '../Components/REG_HEADER'
import REG_PERSONAL from '../Components/REG_PERSONAL'

function Registration() {
  return (
    <div className='reg-body'>
      <div className='reg-heading'>
        <REG_HEADER/>
      </div>
      <div className='personals'>
        <REG_PERSONAL/>
      </div>
    </div>
  )
}

export default Registration