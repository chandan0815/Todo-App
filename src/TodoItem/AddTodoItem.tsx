import React, { useState } from 'react';

interface AddTodoProps {
  onAddItem: (newTodo: Todo) => void;
}

interface Todo {
  id: number;
  taskName: string;
  taskDesc: string;
  completed: boolean;
}

function AddTodo({ onAddItem }: AddTodoProps) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskName.trim()) return;
    const newTodo: Todo = {
      id: Math.random(),
      taskName: taskName,
      taskDesc: taskDesc,
      completed: false,
    };
    onAddItem(newTodo);
    setTaskName('');
    setTaskDesc('');
  };

  return (
    <form className='mb-4' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border p-2 w-full'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Add a new todo'
      />
      <button className='bg-blue-500 text-white p-2 w-full mt-2'>Add</button>
    </form>
  );
}

export default AddTodo;
