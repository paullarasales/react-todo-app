import React from 'react';
import { Todo } from '../types';


interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo}) => {
  return (
    <li>
      <span
      style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
      onClick={() => toggleTodo(todo.id)}
      >
      {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  )
}


export default TodoItem;