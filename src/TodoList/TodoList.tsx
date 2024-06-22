import TodoItem from '../TodoItem/TodoItem.tsx';
import AddTodo from '../TodoItem/AddTodoItem.tsx';
import { Todo } from '../TodoItem/TodoItem';
import { useState } from 'react';
// const sampleTasks = [
//   { id: 1, taskName: 'Task1', taskDesc: 'DescTask1', completed: false },
//   { id: 2, taskName: 'Task2', taskDesc: 'DescTask2', completed: true },
// ];
function TodoList() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  function handleAddTodoItem(newTodo: Todo) {
    setTodoItems([...todoItems, newTodo]);
  }
  return (
    <>
      <h1 className='text-2xl font-bold mb-4'>List of Todos</h1>
      <AddTodo onAddItem={handleAddTodoItem} />
      <ul>
        {todoItems.map((task) => (
          <TodoItem key={task.id} itemObj={task} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
