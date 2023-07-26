import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoFooter from './components/TodoFooter'

function reducer(state, action) {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isDone: false
      }
    ]
  }
  else if (action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  }
  else if (action.type === "clear-completed") {
    return state.filter((todo) => !todo.isDone);
  }
  else if (action.type === "update") {
    return state.map((todo) => {
      if (todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo
    })
  }
}
function App() {


  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn React",
      isDone: false
    }
  ])
  // const [todos, setTodos] = useState()

  return (
    <>
      <TodoForm onAdd={(text) => {
        // setTodos([
        //   ...todos,
        //   {
        //     id: Math.random(),
        //     text: text,
        //     isDone: false
        //   }
        // ])
        dispatch({
          type: 'add',
          payload: {
            text: text
          }
        });
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          // setTodos(todos.filter((t) => t.id !== todo.id))
          dispatch({
            type: "delete",
            payload: {
              id: todo.id
            }
          });
        }}
        onChange={(newTodo) => {
          // setTodos(
          //   todos.map((todo) => {
          //     if (newTodo.id == todo.id) {
          //       return newTodo
          //     }
          //     return todo
          //   })
          // )
          dispatch({
            type: "update",
            payload: {
              updatedTodo: newTodo
            }
          });
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        // setTodos(todos.filter((todo) => !todo.isDone))
        dispatch({
          type: "clear-completed"
        });
      }} />
    </>
  )
}

export default App
