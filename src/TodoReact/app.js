import React, { useEffect, useState } from 'react';
import Header from './header';
import Form from './form';
import TodoList from './todo';
import './app.css'

const App = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
    <div className='appstyle'>
        <div>
            <Header />
        </div>
        <div>
            <Form
            input= {input}
            setInput={setInput}
            todos = {todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
        </div>
        <div>
            <TodoList todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}/>
        </div>
    </div>
  )
}

export default App;