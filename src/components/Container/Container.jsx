import React, { useState } from 'react'
import { FormToDo } from '../FormToDo/FormToDo'
import { TaskList } from '../TaskList/TaskList'

export const Container = () => {

  const [list, setList] = useState([])

  const handleAddItem = addItem => {
    setList([...list, addItem])
  }

  return (
    <>
      <div className='containerInit'>
        <div className='containerTitle'>
          <h1 className='titleInit'>To Do List App</h1>
        </div>
        <FormToDo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
      </div>
    </>
  )
}
