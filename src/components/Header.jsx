import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="logo-snap" />
        <nav className="nav">
          <a className="nav__item" href="#">
            Features
          </a>
          <a className="nav__item" href="#">
            Company
          </a>
          <a className="nav__item" href="#">
            Careers
          </a>
          <a className="nav__item" href="#">
            About
          </a>
        </nav>
      </div>
      <div className="header__session">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </header>
  );
}

export default Header;
