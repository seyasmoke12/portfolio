import React from 'react'
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import SkillItem from './SkillItem';
import TimelineItem from './TimelineItem';

function Resume() {
  return (
    <section>
        <header>
        <h2 className="h2 article-title">Resume</h2>
        </header>
        <div className='timeline'>
            <div className="title-wrapper">
                <div className='icon-box'>
                    <FaBookReader />
                </div>
                <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
          <TimelineItem
            title="High School of Art and Design"
            date="2020 — 2022"
            description="Completed a focused curriculum in art and design, which provided a strong foundation for a creative career."
          />
          <TimelineItem
            title="University School of the Arts"
            date="2022 — 2023"
            description="Acquired advanced design skills and creative techniques relevant to the arts and media industries."
          />
          <TimelineItem
            title="Udacity"
            date="2024"
            description="Pursuing a course in Data Science, gaining skills in data analysis, machine learning, and statistical methods to solve complex problems and derive meaningful insights from data."
          />
        </ol>
        </div>
        <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Freelance Web Developer & Designer"
            date="2024 — Present"
            description="Created and maintained websites for various clients, focusing on user-friendly design and responsive layouts. Utilized skills from education and training to deliver high-quality, functional websites tailored to client needs."
          />
          <TimelineItem
            title="Phone Repair Technician"
            date="2018 — 2021"
            description="Provided expert repair services for mobile phones, diagnosing and fixing hardware and software issues. Developed strong problem-solving skills and technical expertise in handling various phone models and technical components."
          />
          <TimelineItem
            title="Technical Parts Specialist"
            date="2010 — 2021"
            description="Managed and maintained technical components, ensuring their optimal performance. Gained hands-on experience in troubleshooting and repairing technical parts, contributing to a deeper understanding of technical systems and components."
          />
        </ol>
      </div>
      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={90} />
          <SkillItem title="Css" value={90} />
          <SkillItem title="Tailwind CSS" value={70} />
          <SkillItem title="JavaScript" value={87} />
          <SkillItem title="Node" value={90} />
          <SkillItem title="Express.js" value={80} />
          <SkillItem title="React" value={95} />
          <SkillItem title="Mysql" value={80} />
          <SkillItem title=" Restfullapi" value={87} />
        </ul>
      </div>
    </section>
  )
}

export default Resume