export interface Todo {
  id: number;
  taskName: string;
  taskDesc: string;
  completed: boolean;
}
function TodoItem(props: {
  itemObj: Todo;
  onDeleteItem: (id: number) => void;
}) {
  return (
    <li className='flex gap-4 py-2'>
      <div className='flex items-center justify-between bg-yellow-500 p-4 my-2 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold'>{props.itemObj.taskName}</h2>
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
