import { useState, useEffect } from 'react';

const FetchDataEffect = () => {
  // State to store fetched data
  const [post, setPost] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPost(data[0]); // Store the first post
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once (on mount)

  return (
    <div>
      <h1>First Post</h1>
      {post ? <p>{post.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
