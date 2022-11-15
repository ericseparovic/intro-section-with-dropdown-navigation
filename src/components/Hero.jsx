import HeroMobile from "../assets/images/image-hero-mobile.png";
import HeroDesktop from "../assets/images/image-hero-desktop.png";
function Hero() {
  return (
    <section className="main__hero">
      <img className="main__hero-mobile" src={HeroMobile} alt="hero-mobile" />
      <img
        className="main__hero-desktop"
        src={HeroDesktop}
        alt="hero-desktop"
      />
    </section>
  );
}

export default Hero;
