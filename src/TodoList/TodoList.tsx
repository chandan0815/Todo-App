import TodoItem from '../TodoItem/TodoItem.tsx';
import AddTodo from '../TodoItem/AddTodoItem.tsx';
import { Todo } from '../TodoItem/TodoItem';
import { useState } from 'react';

function TodoList() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  function handleAddTodoItem(newTodo: Todo) {
    setTodoItems([...todoItems, newTodo]);
  }
  function handleDeleteTodoItem(id: number) {
    setTodoItems(todoItems.filter((task) => task.id !== id));
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
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
