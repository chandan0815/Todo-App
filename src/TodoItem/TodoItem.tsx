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
    <li className='flex gap-4 py-2 '>
      <div
        className={`${
          props.itemObj.completed ? 'bg-yellow-300' : 'bg-yellow-500'
        } flex items-center justify-between p-1 my-1 rounded-lg shadow-lg w-full`}
      >
        <button
          className={`${
            props.itemObj.completed ? 'bg-green-500' : 'bg-yellow-500'
          } text-white p-2 rounded-full`}
          onClick={() => props.onStatusChange(props.itemObj.id)}
        >
          {props.itemObj.completed ? '✔' : '✓'}
        </button>
        <button
          onClick={handleEdit}
          className='bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2'
        >
          {isEditing ? '💾' : '✏️'}
        </button>
        {isEditing ? (
          <input
            type='text'
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className='border p-2 rounded mb-2'
          />
        ) : (
          <div
            className={`${
              props.itemObj.completed ? 'font-light' : 'font-bold'
            } text-3xl`}
          >
            {props.itemObj.taskName}
          </div>
        )}

        <div>{props.itemObj.dueDate}</div>
        <div>{props.itemObj.createdDate}</div>

        <button
          className='bg-red-500 text-white p-2 rounded-lg'
          onClick={() => props.onDeleteItem(props.itemObj.id)}
        >
          ❌
        </button>
      </div>
    </li>
  );
}
