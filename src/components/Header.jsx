import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconArrowDown from "../assets/images/icon-arrow-down.svg";
import IconCloseMenu from "../assets/images/icon-close-menu.svg";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="logo-snap" />
      </div>
      <div className="header__nav-session">
        <div className="header__icon-close-menu">
          <img src={IconCloseMenu} alt="icon-close-menu" />
        </div>
        <nav className="nav">
          <div className="nav__item">
            <a className="nav__item-a" href="#">
              Features
            </a>
            <img src={IconArrowDown} alt="icon-arrow-down" />
          </div>
          <div className="nav__item">
            <a className="nav__item-a" href="#">
              Company
            </a>
            <img src={IconArrowDown} alt="icon-arrow-down" />
          </div>
          <a className="nav__item-a" href="#">
            Careers
          </a>
          <a className="nav__item-a" href="#">
            About
          </a>
        </nav>

        <div className="header__session">
          <a className="header__login" href="#">
            Login
          </a>
          <a className="header__register" href="#">
            Register
          </a>
        </div>
      </div>
      <div className="header__icon-menu">
        <img src={IconMenu} alt="icon-menu" />
      </div>
    </header>
  );
}

export default Header;
