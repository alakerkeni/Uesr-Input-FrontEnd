import React, { useState } from 'react';
import './Styles.css';

const SkillInput = ({ onAddSkill }) => {
  const [skill, setSkill] = useState('');
  const [previousSkills, setPreviousSkills] = useState([]);

  const handleInputChange = (event) => {
      setSkill(event.target.value);

  };

  const handleAddSkill = () => {
    if (skill.trim() && !previousSkills.includes(skill.trim())) {
      onAddSkill(skill.trim());
      setSkill('');
      setPreviousSkills([...previousSkills, skill.trim()]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={skill}
        style={{ textAlign: 'center', fontSize: '2em', color: '#333', width: '80%' , justifyContent: 'center', minWidth: '100px'}}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Skills"
      />
      <button onClick={handleAddSkill}
      style={{ textAlign: 'center', fontSize: '2em', color: '#333' }}
      >
        Add
        </button>
    </div>
  );
};

export default SkillInput;
