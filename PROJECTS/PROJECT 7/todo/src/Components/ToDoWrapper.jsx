import React, { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from 'uuid'
export default function ToDoWrapper() {
    const [todos, setTodos] = useState([])

    let addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                text: todo,
                completed: false,
                isEditing: false
            }
        ])
    }

    return (
        <>
            <div className='TodoWrapper'>
                <h1>ToDo List</h1>
                <ToDoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <ToDo task={todo} key={index} />
                ))}
            </div>
        </>
    )
}