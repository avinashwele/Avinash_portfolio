import React from 'react'
import { skills, experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>
          Avinash Wele</span></h1>
        <h1 className='subhead-text'><span className='blue-gradient_text font-semibold drop-shadow-sm'>
          Software Engineer &nbsp;&nbsp;& &nbsp;&nbsp;Full Stack Java Developer</span></h1>
      
      <br />
      <div>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        "Enthusiastic and motivated Java stack developer with a solid understanding of Java programming fundamentals. Experienced in building basic applications using Java and Spring Framework. Strong problem-solving skills and a passion for learning new technologies. Seeking an opportunity to gain hands-on experience and further develop skills in software development."
        </p>
      </div>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'> 
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='py-16 '>
        <h3 className='subhead-text'></h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        </p>
      </div>
      <div className='mt-12 flex '>
      </div>
      </div> */}
      <br />
      <hr className='border-slate-200'/>
      <section className='max-container '>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow-sm'>
          Projects</span></h1>
      <div className='mt-2 leading-relaxed text-slate-500'>
        
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400] w-full ' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link to={project.link} target='_blank'  rel='noopener noreferrer'
                className='font-semibold text-blue-600'>Live Link</Link>
                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
      <hr className='border-slate-300'/>
      <CTA/>
      <br />
      <hr className='border-slate-300'/>
      <Footer />
    </section>
  );
}

export default Home;