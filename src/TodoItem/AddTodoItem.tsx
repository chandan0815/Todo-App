import React, { useState } from 'react';
import { Todo } from '../TodoItem/TodoItem';
import { getCurrentTime, parseDate } from '../utilities/timeConversions';

interface AddTodoProps {
  onAddItem: (newTodo: Todo) => void;
}

export default function AddTodo({ onAddItem }: AddTodoProps) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskName.trim()) {
      alert('Task name is required');
      return;
    }

    const newTodo: Todo = {
      id: Math.random(),
      taskName: taskName,
      completed: false,
      createdDate: getCurrentTime(false),
      dueDate: parseDate(dueDate, '-'),
    };
    onAddItem(newTodo);
    setTaskName('');
    setDueDate('');
  };

  return (
    <form className='mb-4 flex' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border p-2 w-full'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Add a new todo'
      />
      <div className='relative'>
        <input
          type='date'
          className='border p-2 rounded'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button className='bg-blue-500 text-white p-2 w-full '>✚ Add task</button>
    </form>
  );
}
