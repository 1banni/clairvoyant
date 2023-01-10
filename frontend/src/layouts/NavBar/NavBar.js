import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileMenu from '../../components/Menu/ProfileMenu';
// import site_logo from '../../assets/logo_with_name.png';
// import user_logo from '../../assets/profile.png';
// import write_logo from '../../assets/svg/write-logo.svg';

import Button from '../../blocks/Button';
import LoginModal from '../../modals/LoginModal';
import './NavBar.css';

import { ReactComponent as WriteIcon } from '../../assets/svg/write-logo.svg'
import { ReactComponent as ClairvoyantLogo } from '../../assets/svg/clairvoyant-logo.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import NavItem from '../../components/NavItem/NavItem';

// const myImg = require('./assets/Profilemethods.png');

function NavBar() {
  const sessionUser = useSelector(state => state.session.user);
  const [fixed, setFixed] = useState("nav-bar-wrapper");
  
  // useEffect(()=> {
  //   if (window.scroll > 10) {
  //     setFixed("nav-bar-wrapper fixed");
  //   } else {
  //     setFixed("nav-bar-wrapper");
  //   }
  // }, [window.scroll])

  const magic = () => {
    window.scrollY > 535
      ? setFixed("nav-bar-wrapper fixed")
      : setFixed("nav-bar-wrapper");
  }

  let sessionLink;
  if (sessionUser) {
    sessionLink = (
      <ProfileMenu className="icon profile" user={sessionUser} />
    );
  } else {
    sessionLink = (
      <>
        <Button className="icon-btn login-modal"
                containerName="icon-btn-ctnr login-modal"
                modal={ LoginModal }>
          <ProfileIcon className="icon profile"/>
        </Button>
      </>
    );
  }


  window.addEventListener("scroll", magic);
  return (
    <div className={fixed}>
    <div className="nav-bar">
      <div className="left-links">
        <div className="nav-link homepage">
          <NavLink exact to="/">
            <ClairvoyantLogo className="icon logo" />
          </NavLink>
        </div>
      </div>
      <div className="right-links">
        <div className="nav-link write">
          <NavItem exact to="/articles/new">
            <WriteIcon className="icon write"/>
          {/* <NavLink exact to="/articles/new"> */}
            {/* <img src={write_logo} alt="diamonds" height="20" /> */}
          </NavItem>
        </div>
        <div className="nav-link session">
          {sessionLink}
        </div>
      </div>

    </div>
    </div>
  );
}

export default NavBar;
