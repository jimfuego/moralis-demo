import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Identifier = (props) => {
  const fName = props.user.fName;
  // const status = props.user.status;
  // const time = moment.format();
  const time = 'early'
  const date = moment().format("MMM Do YYYY"); 

  const createGreeting = (time, name) => {
    var greeting = 'Good '
    greeting += (time === 'early') ? 'morning' : 'evening';
    greeting += `, ${name}!`;
    return greeting.toUpperCase();
  }

  return (
    <div className='user-identifier'>
      <div className='identifier-content'>
        <div className='row'>
          <div className='app-center'>
            <p className='id-greeting'>{createGreeting('early', fName)}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='app-center'>
              <p className=''>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identifier;