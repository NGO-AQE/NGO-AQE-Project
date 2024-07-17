type WhyAQESSProps = {
  icon: string;
  subtitle: string;
  text: string;
};

const WhyAQESS = ({ icon, subtitle, text }: WhyAQESSProps): JSX.Element => {
  return (
    <div className="why__section">
      <img src={icon} alt="" className="why__img" />
      <p className="why__subtitle">{subtitle}</p>
      <p className="why__text">{text}</p>
    </div>
  );
};

export default WhyAQESS;
