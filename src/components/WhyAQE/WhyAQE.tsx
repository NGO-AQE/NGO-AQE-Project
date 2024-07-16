import './WhyAQE.scss';
import briefcaseIcon from '../../assets/icons/material-symbols_work-outline.svg';
import batteryIcon from '../../assets/icons/mingcute_battery-4-line.svg';
import chartIcon from '../../assets/icons/mingcute_chart-bar-2-line.svg';
import lightbulbIcon from '../../assets/icons/mingcute_light-line.svg';

const WhyAQE = () => {
  return (
    <div className="why">
      <p className="why__title">Why AQE?</p>
      <div className="why__section">
        <img src={lightbulbIcon} alt="" className="why__img" />
        <p className="why__subtitle">Inspiring Environment</p>
        <p className="why__text">
          We create stimulating and inspiring atmosphere that encourages
          creativity, innovation, and a lifelong love for learning among
          educators.
        </p>
      </div>
      <div className="why__section">
        <img src={batteryIcon} alt="" className="why__img" />
        <p className="why__subtitle">Refreshing Experience</p>
        <p className="why__text">
          We offer a break from the traditional setting, allowing teachers to
          rejuvenate their passion for teaching through engaging and interactive
          camp activities.
        </p>
      </div>
      <div className="why__section">
        <img src={briefcaseIcon} alt="" className="why__img" />
        <p className="why__subtitle">Practical Application</p>
        <p className="why__text">
          We equip teachers with practical strategies and resources that they
          can immediately implement in classrooms to enhance student learning
          outcomes.
        </p>
      </div>
      <div className="why__section">
        <img src={chartIcon} alt="" className="why__img" />
        <p className="why__subtitle">Professional Growth</p>
        <p className="why__text">
          We provide opportunities for teachers to earn continuing education
          credits, certifications, enhancing your professional credentials and
          career advancement.
        </p>
      </div>
    </div>
  );
};

export default WhyAQE;
