import React from 'react'
import { skills, experiences, tools, educations } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Resume from '../components/Resume';

const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>
          Avinash</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        "Dedicated software engineer with a proven track record of developing high-quality,
         scalable solutions while consistently meeting project deadlines and exceeding 
         client expectations."
        </p>
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

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Tools & Technology</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {tools.map((tool) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'> 
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={tool.imageUrl} alt={tool.name} className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
      <hr className='border-slate-300'/>
    <br />
      <Resume />
      <br />

      <div className='py-16 '>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        "Dedicated software engineer with a proven track record of developing high-quality,
         scalable solutions while consistently meeting project deadlines and exceeding 
         client expectations."
        </p>
      </div>

      <div className='mt-12 flex '>
        <VerticalTimeline>
          {experiences.map((experience) =>(
            <VerticalTimelineElement 
            key={experience.company_name}
            date={experience.date}
            icon={<div className='flex justify-center items-center w-full h-full'>
              <img src={experience.icon} alt={experience.company_name}
              className='w-[60%] h-[60] object-contain' />
            </div>} 
            iconStyle={{background: experience.iconBg}}
            contentStyle={{ borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor:experience.iconBg,
                boxShadow: 'none',

              }}>
              
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                  {experience.company_name}
                </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) =>(
                <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                  {point}
                </li>
              ))}
            </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>

      </div>

      <div className='py-16 '>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        "My IT career path."
        </p>
      </div>

      <div className='mt-12 flex '>
        <VerticalTimeline>
          {educations.map((education) =>(
            <VerticalTimelineElement 
            key={education.company_name}
            date={education.date}
            icon={<div className='flex justify-center items-center w-full h-full'>
              <img src={education.icon} alt={education.company_name}
              className='w-[60%] h-[60] object-contain' />
            </div>} 
            iconStyle={{background: education.iconBg}}
            contentStyle={{ borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor:education.iconBg,
                boxShadow: 'none',

              }}>
              
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {education.title}
                </h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                  {education.company_name}
                </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {education.points.map((point, index) =>(
                <li key={`education-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                  {point}
                </li>
              ))}
            </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>

      </div>

      <hr className='border-slate-200'/>
      <CTA/>
      <hr />
      <Footer />

    </section>
  )
}

export default About