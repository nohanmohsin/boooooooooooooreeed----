import React from 'react';
import Todo from './Todo';

function TodoList(){
  return (
    <div class="todo-container">
      <ul class="todo-list"></ul>
      <Todo />
    </div>
  );
}

export default TodoList;