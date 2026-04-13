import React, { useState } from 'react'

export default function ToDoForm({addTodo}) {
    const [value, setValue] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='TodoFrom'>
                <input
                    type="text"
                    className='todo-input'
                    placeholder='Enter your task'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit' className='todo-btn'>Add a task</button>
            </form>
        </>
    )
}