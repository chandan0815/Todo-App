import { useState } from 'react';

export interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
  createdDate: string;
  dueDate?: string;
}

export default function TodoItem(props: {
  itemObj: Todo;
  onDeleteItem: (id: number) => void;
  onStatusChange: (id: number) => void;
  onEditItem: (id: number, newTaskName: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(props.itemObj.taskName);

  const handleEdit = () => {
    if (isEditing) {
      props.onEditItem(props.itemObj.id, newTaskName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr
      className={`${
        props.itemObj.completed ? 'bg-yellow-300' : 'bg-yellow-500'
      }  items-center justify-between p-1 mb-1 rounded-lg shadow-lg w-full`}
    >
      <td className='p-4 text-center'>
        <button
          className={`${
            props.itemObj.completed ? 'bg-green-500' : 'bg-yellow-500'
          } text-white rounded-full w-8 h-8 flex items-center justify-center`}
          onClick={() => props.onStatusChange(props.itemObj.id)}
        >
          {props.itemObj.completed ? '✔' : '✓'}
        </button>
      </td>
      <td className='p-4 text-center'>
        {isEditing ? (
          <input
            type='text'
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className='border p-2 rounded mb-2'
          />
        ) : (
          <span
            className={`${
              props.itemObj.completed ? 'font-light line-through' : 'font-bold'
            } text-3xl text-center`}
          >
            {props.itemObj.taskName}
          </span>
        )}
      </td>
      <td className='p-4 text-center'>
        <span className='text-sm text-gray-700'>{props.itemObj.dueDate}</span>
      </td>
      <td className='p-4 text-center'>
        <span className='text-sm text-gray-700'>
          {props.itemObj.createdDate}
        </span>
      </td>
      <td className='p-4 text-center flex items-center justify-center space-x-2'>
        <button
          onClick={handleEdit}
          className='bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2'
        >
          {isEditing ? '💾' : '✏️'}
        </button>
        <button
          className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2'
          onClick={() => props.onDeleteItem(props.itemObj.id)}
        >
          ❌
        </button>
      </td>
    </tr>
  );
}
