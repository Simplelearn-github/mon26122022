import React, { useState } from 'react'


export const Registration = () => {
    const[data,setData]=useState({
        name:'',
        mail:''
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value
        })
    }
  
       
    
  return (
    <div className='Welcome'>
<form>
    
    <label>NAME</label>
    <input type="text" name="name" onChange={changeHandler}/>
    <label>EMail</label>
    <input type="text" name="mail" onChange={changeHandler}/>
    <h1>Hello <b style={{color:"red"}}>{data.name}</b>&nbsp;Welcome to Naveen's Website</h1>
    <h2>Your Mail Id is:<b style={{color:"Blue"}}>{data.mail}</b></h2>

  </form> 

    </div>
  )
}
