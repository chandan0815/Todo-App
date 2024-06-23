import TodoItem from '../TodoItem/TodoItem.tsx';
import { Todo } from '../TodoItem/TodoItem';
import AddTodo from '../TodoItem/AddTodoItem.tsx';
import { useState } from 'react';

function TodoList() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  function handleAddTodoItem(newTodo: Todo) {
    setTodoItems([...todoItems, newTodo]);
  }
  function handleDeleteTodoItem(id: number) {
    setTodoItems(todoItems.filter((task) => task.id !== id));
  }
  function handleStatusChange(id: number) {
    setTodoItems(
      todoItems.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <>
      <h1 className='text-4xl font-bold mb-4'>List of Todos</h1>
      <AddTodo onAddItem={handleAddTodoItem} />
      <ul>
        {todoItems.map((task) => (
          <TodoItem
            key={task.id}
            itemObj={task}
            onDeleteItem={handleDeleteTodoItem}
            onStatusChange={handleStatusChange}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
