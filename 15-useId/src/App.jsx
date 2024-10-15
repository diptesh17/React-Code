import  { useId } from 'react';

function App() {
    const id = useId();

    return (
        <form>
            <div>
                <label htmlFor={`${id}-username`}>Username:</label>
                <input id={`${id}-username`} type="text" />
            </div>
            <div>
                <label htmlFor={`${id}-password`}>Password:</label>
                <input id={`${id}-password`} type="password" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default App;
