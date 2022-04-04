import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Join = () => {
  const [name, setName]= useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinoutercontainer'>
      <div className='joininnercontainer'>
        <h1 className='heading'> Join </h1>
        <div><input className='joininput' type='text' placeholder='Name'  onChange={(e)=> setName(e.target.value)} /> </div>
        <div><input mt-20 className='joininput' type='text' placeholder='Room'  onChange={(e)=>setRoom(e.target.value)} /> </div>
        <Link onClick={e=> (!name || !room) ? e.preventDefault(): null} to={`./chat?name=${name}&room=${room}`}>
          <button mt-20 className='button' type='submit'> sing In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join