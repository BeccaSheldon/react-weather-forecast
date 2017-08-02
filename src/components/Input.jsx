import React from 'react'

export default function Input({className, changeHandler, type, value}) {
  return (
  	<input
    	className={className}
  		onChange={changeHandler}
  		type={type}
  		value={value}
  	/>
  )
}