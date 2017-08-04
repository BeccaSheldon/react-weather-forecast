import React from 'react'

export default function Input({className, changeHandler, placeholder, type, value}) {
  return (
  	<input
    	className={className}
  		onChange={changeHandler}
  		placeholder={placeholder}
  		type={type}
  		value={value}
  	/>
  )
}