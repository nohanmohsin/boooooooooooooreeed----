import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      <Todolist />
    </div> 
  );
}

 export default App;