import  { useState, useEffect } from 'react';

const CounterEffect = () => {
  // Initialize count state
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array ensures effect runs only when count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
