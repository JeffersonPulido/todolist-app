import React, { useState } from 'react'
import './FormToDo.css'

export const FormToDo = props => {

  const [description, setDescription] = useState("");

  const { handleAddItem } = props;

  const handleSubmit = e => {
    e.preventDefault();
    
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    })

    setDescription("")
  }

  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit}>
        <div className='todo-list'>
          <div className='file-input'>
            <input minLength="5" maxLength="60" size="60" type="text" className='text' value={description} onChange={e => setDescription(e.target.value)}/>
            <button className='button pink' disabled={description ? "" : "disabled"}>+</button>
          </div>
        </div>
      </form>
    </>
  )
}
