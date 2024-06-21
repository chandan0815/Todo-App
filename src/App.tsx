import { useState } from 'react';
import TodoList from './TodoList/TodoList';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
