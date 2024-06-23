export interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
  createdDate: string;
  dueDate?: string;
}

function TodoItem(props: {
  itemObj: Todo;
  onDeleteItem: (id: number) => void;
  onStatusChange: (id: number) => void;
}) {
  return (
    <li className='flex gap-4 py-2 '>
      {/* <div className='flex items-center justify-between bg-yellow-500 p-1 my-1 rounded-lg shadow-lg w-full'> */}
      <div
        className={`${
          props.itemObj.completed ? 'bg-yellow-300' : 'bg-yellow-500'
        } flex items-center justify-between p-1 my-1 rounded-lg shadow-lg w-full`}
      >
        <button
          className={`${
            props.itemObj.completed ? 'bg-green-500' : 'bg-yellow-500'
          } text-white p-2 rounded-lg`}
          onClick={() => props.onStatusChange(props.itemObj.id)}
        >
          {props.itemObj.completed ? '✔' : '✓'}
        </button>

        <div
          className={`${
            props.itemObj.completed ? 'font-light' : 'font-bold'
          } text-3xl`}
        >
          {props.itemObj.taskName}
        </div>
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

export default TodoItem;
