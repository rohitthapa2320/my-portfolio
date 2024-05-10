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
  1: (<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
    Hi, I am <span className="font-semibold">Rohit Thapa</span>
    <br />
    A Software Engineer from India
  </h1>),
  2: (<InfoBox
        text="An Enginner with two years of experience"
        link="/about"
        btnText="Learn More"
     />),
  3: (<InfoBox
        text="Worked on multiple projects. Have A Look"
        link="/projects"
        btnText="Visit My Portfolio"
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