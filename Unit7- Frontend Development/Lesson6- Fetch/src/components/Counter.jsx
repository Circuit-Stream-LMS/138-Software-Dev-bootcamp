import  { useReducer } from 'react';
import { counterReducer, initialState } from '../reducer/counterReducer';

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Counter Example</h2>
      <p style={{ fontSize: '2rem' }}>{state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
    </div>
  );
}

export default Counter;
