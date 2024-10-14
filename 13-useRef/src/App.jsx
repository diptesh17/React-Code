import  { useRef } from 'react';

function App() {
    const inputRef = useRef(null);

    const handleAdd = () => {
        // Setting the value of the input field to "dip" using the useRef
        inputRef.current.value = "dip";
    };

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Enter your name" />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default App;
