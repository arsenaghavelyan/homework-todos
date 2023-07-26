import React from 'react'

function TodoItem({ todo, onChange, onDelete }) {
    return (
        <div>
            <label className='w-[375px] flex flex-row justify-between  items-center bg-white shadow-[0_0px_10px_rgba(0,0,0,0.5)] rounded-[4px] p-[15px] m-[5px]' >
                <input type="checkbox" checked={todo.isDone} onChange={(e) => {
                    onChange({
                        ...todo,
                        isDone: e.target.checked
                    })
                }} />
                {todo.text}
                <button onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem