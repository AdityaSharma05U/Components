import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [messageFromChild, setMessageFromChild] = useState('');

  const handleMessageFromChild = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div className="parent-container">
      <h2>Parent Component</h2>
      <p>Message from Child: {messageFromChild}</p>
      <ChildComponent onMessage={handleMessageFromChild} />
    </div>
  );
};

export default ParentComponent;
