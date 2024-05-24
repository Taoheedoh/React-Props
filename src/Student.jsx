import React from 'react'

function Student(props) {
  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "NO"}</p>
    </div>
  )
}

export default Student