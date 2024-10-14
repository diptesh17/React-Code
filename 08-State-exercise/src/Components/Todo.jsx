import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([
    { title: "College Work", time: "today" },
    { title: "Personal Work", time: "Tomorrow" },
  ]);

  const handler = () => {
    setTodo([...todo, { title: "Tution work", time: "A month" }]);
  };

  return (
    <>
      {todo.map((t, index) => (
        <ul key={index}>
          <li>{t.title}</li>
          <li>{t.time}</li>
        </ul>
      ))}

      <button onClick={handler}>Add todo</button>
    </>
  );
};

export default Todo;
