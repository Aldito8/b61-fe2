import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoProvider'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <TodoProvider>
      <h1 className='mb-8 font-semibold'>ToDo App</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  )
}

export default App
