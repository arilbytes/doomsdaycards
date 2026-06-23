import React from 'react';
import { Hammer } from 'lucide-react';
const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/GzZj_tvxoo7g8fz9z4-I_iCNLEOnELQKWJommf1AAYI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0RM/VUt5ZUpjVzM4c3RR/aWFOQVU5eEYuanBn" alt="" />
          <button> <Hammer /> </button>
        <div className="bottom">
          <h2>Odinson Thor</h2> <span>Chris Hemsworth</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;