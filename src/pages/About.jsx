import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from "../constants";
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi, I'm <span className="blue-gradient_text font-semibold drop-shadow">Rohit Thapa</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>A Software Enginner with experience of two years.
          A fervent person who loves to explore new horizons of knowledge and believes in 
          improving, learning and growing day by day.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {
            skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl"/>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            ))
          }
        </div>
        
      </div>

      <hr className="border-slate-200"/>
      <Footer />
    </section>
  )
};

export default About;