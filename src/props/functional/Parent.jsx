import React from 'react'
import Child from './Child'

export default function Parent() {
    let fullName = "sandeep"  //data tranfer parent to child

    const testing = ( data)=>{
        console.log(data)

    }
  return (
    <div>
        Parent
        <div>
            <Child  testing = {testing} test = "test" fullname={fullName}/>
        </div>
        
    </div>
  )
}
 