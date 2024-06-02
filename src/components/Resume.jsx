import React from 'react';

const Resume = () => {
  return (
    <section className='flex justify-center items-center h-20'>
      <a 
        href='/resume.pdf' 
        className='inline-block px-6 py-3 text-white btn bg-blue-400 text-center rounded-md transition duration-300 hover:bg-blue-500' 
        download
      >
        Explore My Resume
      </a>
    </section>
  );
};

export default Resume;
