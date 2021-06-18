import Typical from "react-typical";

const HeroImage = () => {
  return (
    <div className="home">
      <h1>Hi</h1>
      <Typical
        steps={["I", 1000, " I am Frontend Developer", 2000]}
        loop={Infinity}
        wrapper="h2"
      />
    </div>
  );
};

export default HeroImage;
