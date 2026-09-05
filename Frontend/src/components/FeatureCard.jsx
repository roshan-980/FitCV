import './FeatureCard.css';
const FeatureCard = ({ label, title, description }) => {
  return (
    <div className="featureCard">
      <div className="featureLabel">
        {label}
      </div>

      <div className="featureTitle">
        {title}
      </div>

      <div className="featureBody">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;