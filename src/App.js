import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import MyContext from './context';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const ited = 'ited'
  return (
    <MyContext.Provider value={{ step_1: ited, plus: setCount, count: count }}>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <First />
        <Second step_1={ited} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
