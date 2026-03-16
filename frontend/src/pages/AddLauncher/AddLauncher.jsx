import React, { useState } from 'react'
import "./AddLauncher.css"
import { axsiosAddRocket } from '../../api/axios'

function AddLauncher() {

  const [name, setName] = useState("")
  const [rocketType, setRocketType] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [city, setCity] = useState("")
  const [res, setRes] = useState("")

  async function addRocket() {
    const res = await axsiosAddRocket(name, city, rocketType, latitude, longitude)

    if(res){
      setRes(<h3>Add sucssfuly</h3>)
    }else{
      setRes(<h2>Error</h2>)
    }
    setName("")
    // setRocketType("")
    setLatitude("")
    setLongitude("")
    setCity("")
    
  }

  return (
    <div className='con-addlauncher'>
      <h2>Add Rocets</h2>

      <div className='con-inputs'>

        <input type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} />
        <select name="rocket-type" id="" onChange={(e)=>{setRocketType(e.target.value)}}>
          <option value="Kheibar">Kheibar</option>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
        </select>
        
        <input type="number" placeholder={latitude} onChange={(e) => { setLatitude(e.target.value) }} />
        <input type="number" placeholder={longitude} onChange={(e) => { setLongitude(e.target.value) }} />
        <input type="text" placeholder={`${city}`} onChange={(e) => { setCity(e.target.value) }} />
      </div>

      <button onClick={addRocket}>send</button>
     
      {res}
    </div>

  )
}

export default AddLauncher