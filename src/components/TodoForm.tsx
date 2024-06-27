import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Add a new Todo'
            />
        </form>
    )
}

export default TodoForm;