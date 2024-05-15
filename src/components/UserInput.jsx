import React, { useState } from 'react';
import axios from 'axios';

const UserNameInput = ({ onUserNameChange }) => {
  const [userName, setUserName] = useState('');

  const handleAddButtonClick = () =>{

  }
  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={userName}
        placeholder="Enter Name"
        onChange={handleInputChange}
        style={{ textAlign: 'center', fontSize: '2em', color: '#333', minWidth: '100px', maxWidth: '200px' }}
      />
      <button onClick={handleAddButtonClick} style={{ textAlign: 'center', fontSize: '2em', color: '#333', minWidth: '100px', maxWidth: '200px' }}>
        register
      </button>
    </div>
  );
};

export default UserNameInput;
