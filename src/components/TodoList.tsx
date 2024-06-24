import TodoItem, { Todo } from './TodoItem';
import AddTodo from './AddTodoItem';
import { useEffect, useState } from 'react';
import FilterButtons from './FilterItems';
import { FilterType } from './filterTypes';

export default function TodoList() {
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

  function handleEditTodoItem(id: number, newTaskName: string) {
    setTodoItems(
      todoItems.map((task) =>
        task.id === id ? { ...task, taskName: newTaskName } : task
      )
    );
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
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-4'>List of Todos</h1>
        <AddTodo onAddItem={handleAddTodoItem} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <table className='min-w-full  rounded-lg shadow-lg'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-4 text-center'>Status</th>
              <th className='p-4 text-center'>Task name</th>
              <th className='p-4 text-center'>Due Date</th>
              <th className='p-4 text-center'>Create Date</th>
              <th className='p-4 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodoItems.map((task) => (
              <TodoItem
                key={task.id}
                item={task}
                deleteItem={handleDeleteTodoItem}
                statusChange={handleStatusChange}
                editItem={handleEditTodoItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
