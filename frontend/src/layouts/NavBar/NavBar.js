import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as WriteIcon } from '../../assets/svg/write-logo.svg'
import { ReactComponent as ClairvoyantLogo } from '../../assets/svg/clairvoyant-logo.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import ProfileMenu from '../../components/Menu/ProfileMenu';
import NavItem from '../../components/NavItem/NavItem';
import Button from '../../blocks/Button';
import LoginModal from '../../modals/LoginModal';
import './NavBar.css';

// const myImg = require('./assets/Profilemethods.png');

function NavBar() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);
  const [colorToggle, setColorToggle] = useState("white");
  const [fixed, setFixed] = useState("floating");

  useEffect(()=> {
    location.pathname === '/'
      ? setColorToggle(prev => "yellow")
      : setColorToggle(prev => "white");
  }, [location])

  // TODO - see if you can do this with a useEffect
  const toggleFixed = () => {
    window.scrollY > 535
      ? setFixed("fixed")
      : setFixed("floating"); // "floating" not used in CSS
  }
  window.addEventListener("scroll", toggleFixed);

  let sessionLink;
  if (sessionUser) {
    sessionLink = (
      <ProfileMenu className="icon profile" user={sessionUser} />
    );
  } else {
    sessionLink = (
        <Button className="icon-btn login-modal"
                containername="icon-btn-ctnr login-modal"
                modal={ LoginModal }>
          <ProfileIcon className="icon profile"/>
        </Button>
    );
  }

  return (
    <div className={"nav-bar-wrapper" + fixed + " " + colorToggle}>
    <div className="nav-bar">
      <div className="nav-bar-l">
        <div className="nav-link homepage">
          <NavItem exact to="/">
            <ClairvoyantLogo className="icon logo" />
          </NavItem>
        </div>
      </div>
      <div className="nav-bar-r">
        <NavItem exact to="/articles/new" className="nav-link write">
          <WriteIcon className="icon write"/>
        </NavItem>
        <div className="nav-link session">
          {sessionLink}
        </div>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
