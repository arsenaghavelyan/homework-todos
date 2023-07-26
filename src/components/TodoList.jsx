import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onChange, onDelete }) {
    return (
        <div className='mt-5'>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete} 
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList