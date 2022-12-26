import React from 'react';


 const Filter = () => {
  const Employe=[
    {
        id:101,
        name:"Naveen",
        mail:"naveenkonakati143@gmail.com",
        salary:20000
    },
    {
        id:102,
        name:"Prashanth",
        mail:"prashu67@gmail.com",
        salary:30000
    },
    {
        id:103,
        name:"Basheer",
        mail:"basheermd@gmail.com",
        salary:40000
    },
    {
        id:104,
        name:"Nirosha",
        mail:"nirosha@gmail.com",
        salary:50000
    },
    {
        id:105,
        name:"Muthireddy",
        mail:"muthireddy@gmail.com",
        salary:60000
    }
]
  return(
    <div>
      <h1>When Salary is greater than <b>31000</b></h1>
    {Employe
      .filter((emp) => emp.salary >= 31000)
      .map((emp) => (
        <h1 key={emp.id}>Id is:<b style={{color:"red"}}>{emp.id} </b>&nbsp;&nbsp;Name is <b style={{color:"red"}}>{emp.name} </b>&nbsp;&nbsp;Mail Id:<b style={{color:'red'}}>{emp.mail}</b>&nbsp;&nbsp; Salary:<b style={{color:'red'}}>{emp.salary}</b></h1>

      ))}
      </div>
  )


}
      

export default Filter