import React from 'react'

export default function Button({className, clickHandler, text}) {
	return (
    <button className={className} onClick={clickHandler}>
      {text ? text : 'Submit'}
    </button>
  )
}