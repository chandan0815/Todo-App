import { useState } from 'react';
import { getDateFromString } from '../utilities/timeProcessing';

export interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
  createdDate: string;
  dueDate?: string;
}

export default function TodoItem(props: {
  item: Todo;
  deleteItem: (id: number) => void;
  statusChange: (id: number) => void;
  editItem: (id: number, newTaskName: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(props.item.taskName);

  const handleEdit = () => {
    if (isEditing) {
      props.editItem(props.item.id, newTaskName);
    }
    setIsEditing(!isEditing);
  };

  const isOverdue = () => {
    if (!props.item.dueDate) return false;
    const dueDate = getDateFromString(props.item.dueDate, '/');
    const currentDate = new Date();
    return dueDate < currentDate;
  };

  return (
    <tr
      className={`${
        props.item.completed ? 'bg-yellow-300' : 'bg-yellow-500'
      }  items-center justify-between p-1 mb-1 rounded-lg shadow-lg w-full`}
    >
      <td className='p-4 text-center'>
        <button
          className={`${
            props.item.completed ? 'bg-green-500' : 'bg-yellow-500'
          } text-white rounded-full w-8 h-8 flex items-center justify-center`}
          onClick={() => props.statusChange(props.item.id)}
        >
          {props.item.completed ? '✔' : '✓'}
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
              props.item.completed ? 'font-light line-through' : 'font-bold'
            } text-3xl text-center`}
          >
            {props.item.taskName}
          </span>
        )}
      </td>
      <td className='p-4 text-center'>
        {isOverdue() ? (
          <span className='text-red-500'>{props.item.dueDate}</span>
        ) : (
          <span className='text-sm text-gray-700'>{props.item.dueDate}</span>
        )}
      </td>
      <td className='p-4 text-center'>
        <span className='text-sm text-gray-700'>{props.item.createdDate}</span>
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
          onClick={() => props.deleteItem(props.item.id)}
        >
          ❌
        </button>
      </td>
    </tr>
  );
}
