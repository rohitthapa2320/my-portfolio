import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
  </div>
);

const renderContent = {
  1: (<InfoBox
        text="Hi, I am Rohit Thapa👋- A Software Engineer"
        link="/about"
        btnText="More About Me!"
     />),
  2: (<InfoBox
        text="Have two years of experience..."
        link="/experience"
        btnText="Know More"
     />),
  3: (<InfoBox
        text="Worked on multiple projects. Have A Look!"
        link="/projects"
        btnText="Visit Projects"
     />),
  4: (<InfoBox
        text="Lets get in touch if you have any query"
        link="/contact"
        btnText="Contact Me"
     />)
};



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo;