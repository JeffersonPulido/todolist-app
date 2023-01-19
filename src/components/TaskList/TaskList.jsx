import React from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import './TaskList.css'


export const TaskList = props => {

  const { list, setList} = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updateList)
  }

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done)
    setList(updateList)
  }

  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
  ))

  return (
    <>
      <div className='todo-Divlist'>
        {list.length ? chk : "No hay tareas!"}
        {list.length ? (
          <p>
            <button className='buttonD blue' onClick={onClickRemoveItem}>
              Eliminar tareas completas
            </button>
          </p>
        ) : null}
      </div>
    </>
  )
}
