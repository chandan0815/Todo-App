import TodoItem from '../TodoItem/TodoItem.tsx';
import AddTodo from '../TodoItem/AddTodoItem.tsx';
const sampleTasks = [
  { id: 1, taskName: 'Task1', taskDesc: 'DescTask1', completed: false },
  { id: 2, taskName: 'Task2', taskDesc: 'DescTask2', completed: true },
];
function TodoList() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-4'> List of Todos </h1>
      <AddTodo />
      <ul>
        {sampleTasks.map((task) => (
          <TodoItem key={task.id} itemObj={task} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
