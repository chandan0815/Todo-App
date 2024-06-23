import TodoItem, { Todo } from '../TodoItem/TodoItem';
import AddTodo from '../TodoItem/AddTodoItem';
import { useEffect, useState } from 'react';
import FilterButtons from './FilterItems';
import { FilterType } from './FilterType';

function TodoList() {
  const [todoItems, setTodoItems] = useState<Todo[]>(() => {
    // Load initial state from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<
    FilterType.All | FilterType.Active | FilterType.Completed
  >(FilterType.All);
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

  const filteredTodoItems = todoItems.filter((task) => {
    if (filter === FilterType.All) return true;
    if (filter === FilterType.Active) return !task.completed;
    if (filter === FilterType.Completed) return task.completed;
    return true;
  });

  //save todoItems to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <>
      <h1 className='text-4xl font-bold mb-4'>List of Todos</h1>
      <AddTodo onAddItem={handleAddTodoItem} />
      <ul>
        {filteredTodoItems.map((task) => (
          <TodoItem
            key={task.id}
            itemObj={task}
            onDeleteItem={handleDeleteTodoItem}
            onStatusChange={handleStatusChange}
          />
        ))}
      </ul>
      <FilterButtons filter={filter} setFilter={setFilter} />
    </>
  );
}

export default TodoList;
