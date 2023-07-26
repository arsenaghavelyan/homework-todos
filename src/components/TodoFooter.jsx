import React from 'react'

function TodoFooter({ todos, onClearCompleted }) {
    const completedLength = todos.filter((todo) => todo.isDone).length
    return (
        <div className='flex justify-between mt-5'>
            <span className='ml-[10px]'>{completedLength}/{todos.length} Completed</span>
            <button onClick={onClearCompleted} className='bg-slate-400 h-[30px] rounded-[4px]'>Clear completed</button>
        </div>
    )
}

export default TodoFooter