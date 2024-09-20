import React from 'react';

interface SkillsTabProps {
  active: boolean;
  selectTab: () => void;
  label: string;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ active, selectTab, label }) => {
  const buttonClasses = active
    ? 'font-normal md:font-semibold text-[#FAF8F0]'
    : 'font-light text-opacity-75';
    
  return (
    <button onClick={selectTab}>
      <p
        className={`md:mr-3 mr-2 md:text-base text-sm hover:text-[#18A4E0] hover:font-normal duration-300 transition-all ease-in-out ${buttonClasses}`}
      >
        {label}
      </p>
    </button>
  );
};

export default SkillsTab;
