import React from 'react';

const Resume = () => {
  return (
    <section className='flex justify-center items-center h-20'>
      <a 
        href='https://drive.google.com/file/d/10vbYIPalzgkuh0IaQ0ekYOxn2q1SZb4c/view?usp=drive_link' 
        className='inline-block px-6 py-3 text-white btn bg-blue-400 text-center rounded-md transition duration-300 hover:bg-blue-500' 
        download
      >
        Explore My Resume
      </a>
    </section>
  );
};

export default Resume;
