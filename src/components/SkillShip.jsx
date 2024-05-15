const SkillChip = ({ skill, onRemove }) => (
    <div className="skill-chip">
      {skill}
      <button onClick={onRemove}>X</button>
    </div>
  );
  
  export default SkillChip;
  