# useReducer 
- Similar to useState but it's design for more complex state transition

- const [state,dispatch] = useReducer(reducer , initialState)
- initialState : Start value of state , when component first renders
- reducer : Its a function which tell , how state should change based on action 
- state : current state value which we can use in component
- dispatch : a function we call to send action to the reducer, which then updates the state