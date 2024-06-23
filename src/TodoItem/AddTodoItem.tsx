import React, { useState } from 'react';
import { Todo } from '../TodoItem/TodoItem';
import { getCurrentTime } from '../utilities/TimeConversions';

interface AddTodoProps {
  onAddItem: (newTodo: Todo) => void;
}

function AddTodo({ onAddItem }: AddTodoProps) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskName.trim()) return;
    const newTodo: Todo = {
      id: Math.random(),
      taskName: taskName,

      completed: false,
      createdDate: getCurrentTime(false),
    };
    onAddItem(newTodo);
    setTaskName('');
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
