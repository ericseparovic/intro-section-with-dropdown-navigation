import IconMenu from "../assets/images/icon-menu.svg";
import IconArrowDown from "../assets/images/icon-arrow-down.svg";
import IconCloseMenu from "../assets/images/icon-close-menu.svg";
import IconTodoList from "../assets/images/icon-todo.svg";
import IconCalendar from "../assets/images/icon-calendar.svg";
import IconReminders from "../assets/images/icon-reminders.svg";
import IconPlanning from "../assets/images/icon-planning.svg";

function Nav() {
  const handleNav = (e) => {
    const nav = document.querySelector(".header__nav-session");
    const opacity = document.querySelector(".bg-opacity");
    nav.classList.toggle("active");
    opacity.classList.toggle("opacity");
  };

  const handleSubNav = (e) => {
    const subNavFeatures = document.querySelector("#sub-nav-features");
    const subNavCompany = document.querySelector("#sub-nav-company");

    if (e.target.id == "nav-features") {
      subNavFeatures.classList.toggle("sub-nav-active");
      subNavCompany.classList.add("sub-nav-active");
    }

    if (e.target.id == "nav-company") {
      subNavCompany.classList.toggle("sub-nav-active");
      subNavFeatures.classList.add("sub-nav-active");
    }
  };

  return (
    <>
      <div className="header__nav-session">
        <div className="header__icon-close-menu" onClick={handleNav}>
          <img src={IconCloseMenu} alt="icon-close-menu" />
        </div>
        <nav onClick={handleSubNav} className="nav">
          <div>
            <div className="nav__item">
              <a id="nav-features" className="nav__item-a" href="#">
                Features
              </a>
              <img src={IconArrowDown} alt="icon-arrow-down" />
            </div>
            <div
              className="sub-nav sub-nav__features--position sub-nav-active"
              id="sub-nav-features"
            >
              <div className="sub-nav__item">
                <img src={IconTodoList} alt="icon-todo" />
                <a className="sub-nav__item-a" href="#">
                  Todo List
                </a>
              </div>
              <div className="sub-nav__item">
                <img src={IconCalendar} alt="icon-calendar" />
                <a className="sub-nav__item-a" href="#">
                  Calendar
                </a>
              </div>
              <div className="sub-nav__item">
                <img src={IconReminders} alt="icon-reminders" />
                <a className="sub-nav__item-a" href="#">
                  Reminders
                </a>
              </div>
              <div className="sub-nav__item">
                <img src={IconPlanning} alt="icon-planning" />
                <a className="sub-nav__item-a" href="#">
                  Planning
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="nav__item">
              <a id="nav-company" className="nav__item-a" href="#">
                Company
              </a>
              <img src={IconArrowDown} alt="icon-arrow-down" />
            </div>
            <div
              id="sub-nav-company"
              className="sub-nav sub-nav__company--position sub-nav-active"
            >
              <a className="sub-nav__item-a" href="#">
                History
              </a>
              <a className="sub-nav__item-a" href="#">
                Our team
              </a>
              <a className="sub-nav__item-a" href="#">
                Blog
              </a>
            </div>
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
      <div className="header__icon-menu" onClick={handleNav}>
        <img src={IconMenu} alt="icon-menu" />
      </div>
    </>
  );
}

export default Nav;
