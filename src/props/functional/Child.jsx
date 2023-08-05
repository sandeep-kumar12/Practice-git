import React from 'react'

export default function Child(props) {
    console.log(props)  //data comesfrom parent
    props.testing(10)
  return (
    <div>
        Child 123
        {props.test}
        <div>
        Name:{props.fullname}
        </div>
        
        </div>
  )
}
