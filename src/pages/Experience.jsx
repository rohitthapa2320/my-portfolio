import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from "../constants";
import Footer from "../components/Footer";

const Experience = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Work <span className="blue-gradient_text font-semibold drop-shadow">Experience</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>A Software Enginner with experience of two years.
          A fervent person who loves to explore new horizons of knowledge and believes in 
          improving, learning and growing day by day.
        </p>
      </div>

      <div className="mt-12 flex">
          <VerticalTimeline>
            {
              experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name} 
                  date={experience.date}
                  icon={<div className='w-full h-full flex justify-center items-center'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>}
                  iconStyle={{
                    background: experience.iconBg
                  }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{margin: 0}}>{experience.company_name}</p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {
                      experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                        </li>
                      ))
                    }
                  </ul>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <hr className="border-slate-200"/>
        <Footer />
    </section>
  )
}

export default Experience;