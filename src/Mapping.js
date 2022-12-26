import React from 'react'

export const Mapping = () => {
    const Student=[
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
            {
                Student.map((stu)=>{
                    return(
                        <h1 key={stu.id}>Id is:<b style={{color:"red"}}>{stu.id} </b>&nbsp;&nbsp;Name is <b style={{color:"red"}}>{stu.name} </b>&nbsp;&nbsp;Mail Id:<b style={{color:'red'}}>{stu.mail}</b>&nbsp;&nbsp; Salary:<b style={{color:'red'}}>{stu.salary}</b></h1>
                    )
                }
                )
            }


        </div>
    )
}
