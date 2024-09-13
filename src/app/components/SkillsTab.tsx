import React, { ReactNode } from 'react';

interface SkillsTabProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'font-semibold text-[#FAF8F0] border-b-2 border-[#18A4E0]'
    : 'text-opacity-75';
    
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 hover:text-[#18A4E0] hover:ease-in-out duration-300 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default SkillsTab;
