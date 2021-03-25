import React, { useState, useEffect } from 'react';


const Home = (props) => {

  const submit = () => {
    console.log('submitted');
  }

  return (
    <div>
      <div className="input-group mb-3 row">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Wallet Address" aria-label="Wallet Address" aria-describedby="basic-addon1" />
      </div>
      <div className='row'>
        <button className="btn btn-primary" type="submit" onClick={() => submit()}>Button</button>
      </div>
    </div>
  )

}

export default Home;