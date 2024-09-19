import { useState } from 'react';
import ExperiencesDesc from './ExperiencesDesc';
import ModalComp from './ModalComp';


function ExperiencesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experiences">
      
      <div className="flex flex-wrap gap-2 place-items-center justify-center py-0 lg:gap-8 lg:px-20 lg:py-10 space-y-5 lg:space-y-0">

        {/* Title Section */}
        <h2 className='p-2 place-self-center text-center w-full lg:w-max bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md text-[#FAF8F0] text-2xl lg:text-4xl font-bold'>
          The Journeys That Makes Me A Person
        </h2>

        <ExperiencesDesc openModal={() => setIsModalOpen(true)}/>

      </div>
      {isModalOpen && (
        <ModalComp idProps="pic_1" onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}

export default ExperiencesSection;
