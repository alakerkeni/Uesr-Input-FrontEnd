import React, { useState } from 'react';
import SkillChip from './components/SkillShip';
import SkillInput from './components/SkillInput';
import UserNameInput from './components/UserInput';


const App = () => {
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontSize: '2em', color: '#333' }}>User Skills</h1>
      <UserNameInput/>
      <div className="skill-list">
      {skills.map((skill) => (
        <SkillChip key={skill} skill={skill} onRemove={() => handleRemoveSkill(skill)} />
      ))}
    </div>
      <SkillInput onAddSkill={handleAddSkill} />
    </div>
  );
};

export default App;
