import React from 'react';

interface SkillsTabProps {
  active: boolean;
  selectTab: () => void;
  label: string;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ active, selectTab, label }) => {
  const buttonClasses = active
    ? 'font-semibold text-[#FAF8F0]'
    : 'text-opacity-75';
    
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 hover:text-[#18A4E0] duration-300 transition-all ease-in-out ${buttonClasses}`}
      >
        {label}
      </p>
    </button>
  );
};

export default SkillsTab;
