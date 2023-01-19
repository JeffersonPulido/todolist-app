import React from 'react'
import { FormToDo } from '../FormToDo/FormToDo'
import { TaskList } from '../TaskList/TaskList'

export const Container = () => {
  return (
    <>
      <div className='containerInit'>
        <div className='containerTitle'>
          <h1 className='titleInit'>To Do List App</h1>
        </div>
        <FormToDo/>
        <TaskList/>
      </div>
    </>
  )
}
