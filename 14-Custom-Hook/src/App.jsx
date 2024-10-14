import useFetch from "./useFetch";

const Home = () => {
  // using our custom hook 👇
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </>
  );
};

const App = () => {
  return <Home />;
};

export default App;