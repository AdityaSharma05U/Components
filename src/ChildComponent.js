import React, { useState } from 'react';

const ChildComponent = ({ onMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessageToParent = () => {
    onMessage(message);
  };

  return (
    <div className="child-container">
      <h3>Child Component</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="message-input"
      />
      <button onClick={sendMessageToParent} className="send-button">
        Send Message to Parent
      </button>
    </div>
  );
};

export default ChildComponent;
