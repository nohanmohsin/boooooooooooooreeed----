import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])
  useEffect(() => {
    filterHandler() 
  }, [todos, status])
  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} status={status} setStatus={setStatus}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div> 
  );
}

 export default App;