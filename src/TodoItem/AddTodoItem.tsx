import React, { useState } from 'react';

function AddTodo() {
  const [text, setText] = useState('');

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (text.trim()) {
  //       addTodo(text);
  //       setText('');
  //     }
  //   };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AddTodo.tsx handleSubmit() text:', text);
  };

  return (
    <form className='mb-4' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border p-2 w-full'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a new todo'
      />
      <button className='bg-blue-500 text-white p-2 w-full mt-2'>Add</button>
    </form>
  );
}

export default AddTodo;
