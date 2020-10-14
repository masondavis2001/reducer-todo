import React, { useState, useReducer } from 'react';
import './App.css';
import Todo from './Todo'
import { reducer } from './reducers/reducerHook'



export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}


export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  );
}


