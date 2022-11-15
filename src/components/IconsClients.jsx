import IconDatabiz from "../assets/images/client-databiz.svg";
import IconAudiophile from "../assets/images/client-audiophile.svg";
import IconMeet from "../assets/images/client-meet.svg";
import IconMaker from "../assets/images/client-maker.svg";

function IconsClients() {
  return (
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
  );
}

export default IconsClients;
