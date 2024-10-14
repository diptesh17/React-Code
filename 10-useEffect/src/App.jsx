import { useState , useEffect } from "react";
import CounterEffect from "./Components/CounterEffect";
import FetchDataEffect from "./Components/FetchDataEffect";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>

      <h1>Counter Effect : </h1>
      <CounterEffect/>
      <h1>Fetch Data Effect : </h1>
      <FetchDataEffect/>
    </>
  );
};

export default App;