import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import site_logo from '../../assets/logo_with_name.png';
import user_logo from '../../assets/profile.png';
import write_logo from '../../assets/write-logo.png'
import Button from '../../components/Button';
import LoginModal from '../../modals/LoginModal';
import './NavBar.css';
import { useEffect } from 'react';


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
    window.scrollY > 350
      ? setFixed("nav-bar-wrapper fixed")
      : setFixed("nav-bar-wrapper");
  }

  let sessionLink;
  if (sessionUser) {
    sessionLink = (
      <ProfileMenu user={sessionUser} />
    );
  } else {
    sessionLink = (
      <>
        <Button className="login-modal-btn"
                containerName="login-modal-btn-container"
                modal={ LoginModal }>
          <img src={user_logo} alt="profile-img" height="30" />
        </Button>
        {/* <button onClick={ openTestModal } className="btn">Open Test Modal</button> */}
      </>
    );
  }


  window.addEventListener("scroll", magic);
  return (
    <div className={fixed}>
    <div className="nav-bar">
      <div className="left-links">
        <div className="nav-link homepage">
          <NavLink exact to="/"><img src={site_logo} alt="diamonds" height="20" /></NavLink>
        </div>
      </div>
      <div className="right-links">
        <div className="nav-link write">
          <NavLink exact to="/articles/new"><img src={write_logo} alt="diamonds" height="20" /></NavLink>
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
