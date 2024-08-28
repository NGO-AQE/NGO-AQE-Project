import s from './AboutUs.module.scss';
import AboutUsCard from './AboutUsCard';

const data = [
  {
    subtitle: 'Our mission',
    info: 'Through innovative training initiatives and personalized support, we aim to equip educators with the knowledge, skills, and confidence needed to inspire lifelong learning and academic success in their students.',
  },
  {
    subtitle: 'Our vision',
    info: 'Our vision at AQE is to create a world where every educator has access to high-quality training and resources, empowering them to foster a dynamic and enriching learning environment for all students.',
  },
];

const AboutUs = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section__title">About Us</h2>
        <div className={s.container}>
          <div className={s.info_container}>
            {data.map((ele, i) => (
              <AboutUsCard
                key={i}
                subtitle={ele.subtitle}
                description={ele.info}
              />
            ))}
          </div>
          <div className={s.img_container}>
            <img src="/img/AboutUsPicture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
