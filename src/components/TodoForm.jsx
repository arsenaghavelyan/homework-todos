import React, { useState } from 'react'

function TodoForm({ onAdd }) {
    const [text, setText] = useState("")
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                onAdd(text)
                setText("")
            }} className='flex items-center justify-evenly'>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className=' w-[320px] h-[40px] border-[1px] border-black mr-[3px]' />
                <button className='w-[50px] h-[40px] bg-slate-400'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm