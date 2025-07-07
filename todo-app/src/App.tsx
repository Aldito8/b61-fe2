// import { useState } from 'react';
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button';

interface Item {
  text: string
  done: boolean
}

function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState<Item[]>([])
  return (
    <div>

      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      <Button text={'Add'} eventOnClick={function (): void {
        const newItem: Item = { text: name, done: false };
        setData([...data, newItem])
        setName('')
      }} />

      <ul>
        {data.map((item, index) => (
          <>
            <li key={index}>
              {item.done ? <s>{item.text}</s> : item.text}
              <Button text={'done'} eventOnClick={function (): void {
                const updated = data.map((item, i) =>
                  (i === index) ? { ...item, done: !item.done } : item
                )
                setData(updated)
              }} />
            </li>
          </>
        ))}
      </ul>

    </div>
  )
}

export default App
