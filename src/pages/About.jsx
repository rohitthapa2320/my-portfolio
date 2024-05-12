import { Link } from 'react-router-dom';

import { coding, technologies, languages } from "../constants";
import Footer from '../components/Footer';
import { arrow } from '../assets/icons';


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
        <h3 className="subhead-text">Skills</h3>
        <h2 className="mt-4 p-2 font-semibold sm:leading-snug font-poppins">Languages</h2>

        <div className="mt-8 flex flex-wrap gap-12">
          {
            languages.map((language) => (
              <div className='flex flex-col'>
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl"/>
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={language.imageUrl} alt={language.name} className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
                <p className='pt-1 font-poppins text-center'>{language.name}</p>
              </div>
              
            ))
          }
        </div>

        <h2 className="mt-8 p-2 font-semibold sm:leading-snug font-poppins">Technologies</h2>

        <div className="mt-6 flex flex-wrap gap-12">
          {
            technologies.map((technology) => (
              <div className='flex flex-col'>
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl"/>
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={technology.imageUrl} alt={technology.name} className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
                <p className='pt-1 font-poppins text-center'>{technology.name}</p>
              </div>
              
            ))
          }
        </div>
        
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Coding Platforms</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {
            coding.map((code) => (
              <div className='flex flex-col'>
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl"/>
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={code.imageUrl} alt={code.name} className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={code.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    {code.name}
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              </div>
            ))
          }
        </div>
        
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Education</h3>

        <h2 className="mt-4 p-2 font-semibold sm:leading-snug font-poppins">B.Tech (Civil Engineering)</h2>
        <h1 className='px-2'>Indian Institute of Technology, Varanasi (BHU)</h1>
        <p className='px-2'>CGPA: 8.35/10</p>
        <p className='p-2 text-xs'>2018-2022</p>

        <h2 className="mt-4 p-2 font-semibold sm:leading-snug font-poppins">Class XII (TSBIE)</h2>
        <h1 className='px-2'>Sri Chaitanya Junior Kalasala</h1>
        <p className='px-2'>Percentage: 98.10%</p>
        <p className='p-2 text-xs'>2016-2017</p>

        <h2 className="mt-4 p-2 font-semibold sm:leading-snug font-poppins">Class X (ICSE)</h2>
        <h1 className='px-2'>St. Francis School</h1>
        <p className='px-2'>Percentage: 92.00%</p>
        <p className='p-2 text-xs'>2014-2015</p>
      </div>

      <hr className="border-slate-200"/>
      <Footer />
    </section>
  )
};

export default About;