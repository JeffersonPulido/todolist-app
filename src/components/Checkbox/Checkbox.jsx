import React from 'react'
import './Checkbox.css'

export const Checkbox = props => {

  const { onChange, data: { id, description, done } } = props

  return (
    <>
      <label className='todo-new-item'>
        <input
          id={"task" + id}
          className='mycheck2'
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div htmlFor={id} className='todo__text'>{description}</div>
      </label>
    </>
  )
}
