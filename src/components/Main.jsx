import HeroMobile from "../assets/images/image-hero-mobile.png";
import HeroDesktop from "../assets/images/image-hero-desktop.png";
import IconDatabiz from "../assets/images/client-databiz.svg";
import IconAudiophile from "../assets/images/client-audiophile.svg";
import IconMeet from "../assets/images/client-meet.svg";
import IconMaker from "../assets/images/client-maker.svg";

function Main() {
  return (
    <>
      <main className="main">
        <section className="main__hero">
          <img
            className="main__hero-mobile"
            src={HeroMobile}
            alt="hero-mobile"
          />
          <img
            className="main__hero-desktop"
            src={HeroDesktop}
            alt="hero-desktop"
          />
        </section>
        <section className="main__info">
          <h1 className="main__info-h1">Make remote work</h1>
          <p className="main__info-p">
            Get you team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <a className="main__info-a" href="#">
            Learn more
          </a>
          <div className="main__icons-clients">
            <div className="main__icon-databiz">
              <img src={IconDatabiz} alt="icon-client-databiz" />
            </div>
            <div className="main__icon-audiophile">
              <img src={IconAudiophile} alt="icon-client-audiophile" />
            </div>
            <div className="main__icon-meet">
              <img src={IconMeet} alt="icon-client-meet" />
            </div>
            <div className="main__icon-maker">
              <img src={IconMaker} alt="icon-client-maker" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
