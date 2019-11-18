import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';



const App = ({ initialCount = 0 }) => {
  const [ count, setCount ] = useState(initialCount);

  return (
    <div>
      <p>The current count is { count }</p>
      <button onClick={() => setCount(count + 1)} >+1</button>
      <button onClick={() => setCount(count - 1)}> -1</button>
      <button onClick={() => setCount(initialCount)}>reset</button> 
    </div>
  )
}

ReactDOM.render(<App initialCount={10}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
