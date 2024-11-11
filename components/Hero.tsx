import Header from "./Header";
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-div" >
      <Header />
      <div className="hero-content">
        <div className="hidden lg:block"></div>

        <div className="hero-para">
          <div className="hero-main">
            <p data-aos="zoom-in-left">I&apos;m</p>
            <p data-aos="zoom-in-left">Rabab</p>
            <p data-aos="zoom-in-left">Muhammad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
