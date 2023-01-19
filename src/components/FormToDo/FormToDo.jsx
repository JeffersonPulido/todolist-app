import React, { useState } from 'react'
import './FormToDo.css'

export const FormToDo = () => {

  const [description, setDescription] = useState("")

  return (
    <>
      <form className='formContainer'>
        <div className='todo-list'>
          <div className='file-input'>
            <input type="text" className='text' value={description} onChange={e => setDescription(e.target.value)}/>
            <button className='button pink' disabled={description ? "" : "disabled"}>+</button>
          </div>
        </div>
      </form>
    </>
  )
}
