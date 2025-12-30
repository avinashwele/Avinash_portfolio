import React from "react";
import { skills, experiences, tools, educations, projects } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="max-container">
      {/* HERO */}
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Avinash Wele
        </span>
      </h1>

      <h1 className="subhead-text">
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Software Engineer
        </span>
      </h1>

      <p className="mt-4 text-slate-500 max-w-3xl">
        Enthusiastic and motivated Java stack developer with a strong foundation
        in Java and Spring Framework. Passionate about building scalable
        applications and continuously learning new technologies.
      </p>

      {/* PROJECTS */}
      <section className="p-5">
        <h1 className="subhead-text">My Projects</h1>

        <div className="mt-8 flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row gap-6 p-5"
            >
              {/* LEFT */}
              <div className="md:w-[20%] w-full flex flex-col items-center md:items-start gap-4">
                <div className="block-container w-14 h-14">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium hover:underline"
                    >
                      🌐 Live URL
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium hover:underline"
                    >
                      🔗 GitHub Repo
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="md:w-[80%] w-full">
                <h4 className="text-2xl font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-5">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((experience) => (
            <VerticalTimeline
              key={experience.company_name}
              layout="1-column"
              lineColor="transparent"
            >
              <VerticalTimelineElement
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="font-medium">{experience.company_name}</p>

                <ul className="mt-3 list-disc ml-5 space-y-2">
                  {experience.points.map((point, i) => (
                    <li key={i} className="text-sm text-black-500/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-5">
        <h3 className="subhead-text">Education</h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {educations.map((education) => (
            <VerticalTimeline
              key={education.company_name}
              layout="1-column"
              lineColor="transparent"
            >
              <VerticalTimelineElement
                date={education.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={education.icon}
                      alt={education.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: education.iconBg }}
                contentStyle={{
                  borderBottom: "8px solid",
                  borderBottomColor: education.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="text-xl font-semibold">{education.title}</h3>
                <p className="font-medium">{education.company_name}</p>

                <ul className="mt-3 list-disc ml-5 space-y-2">
                  {education.points.map((point, i) => (
                    <li key={i} className="text-sm text-black-500/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-5">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-10 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-10">
        <h3 className="subhead-text">Tools & Technology</h3>
        <div className="mt-10 flex flex-wrap gap-12">
          {tools.map((tool) => (
            <div key={tool.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-300 my-10" />
      <Footer />
    </section>
  );
};

export default Home;
