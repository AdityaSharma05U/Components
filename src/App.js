import React from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>React Components Communication Example</h1>
      </header>
      <main>
        <ParentComponent />
      </main>
      <footer>
        2023
      </footer>
    </div>
  );
};

export default App;
