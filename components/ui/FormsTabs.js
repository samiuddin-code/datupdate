import React, { useState } from 'react';
import SelectButton from './SelectButton'; // Adjust import path as necessary
import Forms from './Forms'; // Adjust import path as necessary

const FormsTabs = () => {
  const [activeForm, setActiveForm] = useState('');

  const handleButtonClick = (formType) => {
    setActiveForm(activeForm === formType ? '' : formType);
  };

  return (
    <section className="py-16 px-8 lg:py-20 relative bg-white top z-50 h-full">
      <div className="lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl lg:px-8 lg:mx-auto md:text-gray-900">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl">
          <h2 className="relative mb-10 text-3xl lg:text-5xl lg:z-10 leading-none">Have a project in mind?</h2>
          <h1 className="relative font-bold uppercase block mb-6 text-sm lg:tracking-widest z-10">Send your query below</h1>
        </div>
        {/* <div className="relative mb-10 md:mb-0 md:top-0 h-72 md:h-full w-full z-0">
          <div className="flex grid-row-3 grid-flow-col gap-6 sm:grid-row-3 lg:grid-row-3 lg:w-full">
            <div>
              <SelectButton 
                text="Building" 
                onClick={() => handleButtonClick('building')} 
                classList="bg-white w-44 rounded-full"
                isActive={activeForm === 'building'} 
              />
            </div>
            <div>
              <SelectButton 
                text="Design" 
                onClick={() => handleButtonClick('design')} 
                classList="bg-white w-44 rounded-full"
                isActive={activeForm === 'design'} 
              />
            </div>
            <div>
              <SelectButton 
                text="Concept" 
                onClick={() => handleButtonClick('concept')} 
                classList="bg-white w-44 rounded-full"
                isActive={activeForm === 'concept'} 
              />
            </div>
            <div>
              <SelectButton 
                text="General Query" 
                onClick={() => handleButtonClick('general')} 
                classList="bg-white w-44 rounded-full"
                isActive={activeForm === 'general'} 
              />
            </div>
          </div>
          <Forms formType={activeForm} isVisible={activeForm !== ''} />
        </div> */}
  <div className="relative mb-10 md:mb-0 md:top-0 md:h-full w-full z-0">
  <div className="flex flex-wrap gap-4 md:grid md:grid-cols-4 md:gap-6 lg:w-full">
    <div className="flex-1 min-w-[100px]">
      <SelectButton 
        text="Building" 
        onClick={() => handleButtonClick('building')} 
        classList="bg-white w-full rounded-full text-center"
        isActive={activeForm === 'building'} 
      />
    </div>
    <div className="flex-1 min-w-[100px]">
      <SelectButton 
        text="Design" 
        onClick={() => handleButtonClick('design')} 
        classList="bg-white w-full rounded-full text-center"
        isActive={activeForm === 'design'} 
      />
    </div>
    <div className="flex-1 min-w-[100px]">
      <SelectButton 
        text="Concept" 
        onClick={() => handleButtonClick('concept')} 
        classList="bg-white w-full rounded-full text-center"
        isActive={activeForm === 'concept'} 
      />
    </div>
    <div className="flex-1 min-w-[100px]">
      <SelectButton 
        text="General Query" 
        onClick={() => handleButtonClick('general')} 
        classList="bg-white w-full rounded-full text-center"
        isActive={activeForm === 'general'} 
      />
    </div>
  </div>
  <Forms formType={activeForm} isVisible={activeForm !== ''} />
</div>

      </div>
    </section>
  );
};

export default FormsTabs;
