import React from 'react';
import Todo from './Todo';

function TodoList({todos, setTodos, filteredTodos, setFilteredTodos}){
  return (
    <div class="todo-container">
      <ul class="todo-list">
      {filteredTodos.map(todo => (
        <Todo text={todo.text} todos={todos} setTodos={setTodos} id={todo.id} todo={todo}/>
      ))}
      </ul>
      
    </div>
  );
}

export default TodoList;