import React from 'react';
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
        </ul>
    )
}



export default TodoList;