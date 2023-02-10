import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [colorToggle, setColorToggle] = useState('white');
  const [fixed, setFixed] = useState('nav-bar-wrapper');


  console.log('sessionUser');
  console.log(sessionUser);

  useEffect(()=> {
    location.pathname === '/'
      ? setColorToggle(prev => 'yellow')
      : setColorToggle(prev => 'white');
  }, [location]);

  // TESTING THIS CODE - START
  // useEffect(() => {
  //   window.scrollY > 535
  //   // window.scrollY > 450
  //     ? setFixed('nav-bar-wrapper fixed')
  //     : setFixed('nav-bar-wrapper'); //
  // }, [])
  // TESTING THIS CODE - END

  // TODO - see if you can do this with a useEffect
  const toggleFixed = () => {
    window.scrollY > 535
    // window.scrollY > 450
      ? setFixed('nav-bar-wrapper fixed')
      : setFixed('nav-bar-wrapper'); // 'floating' not used in CSS
  };
  window.addEventListener('scroll', toggleFixed);

  let sessionLink;
  if (sessionUser) {
    sessionLink = (
      <ProfileMenu className='icon profile' user={sessionUser} />
    );
  } else {
    sessionLink = (
        <Button className='icon-btn login-modal'
                containername='icon-btn-ctnr login-modal'
                modal={ LoginModal }>
          <ProfileIcon className='icon profile'/>
        </Button>
    );
  }

  return (
    <div className={fixed + ' ' + colorToggle} role="banner">
    <div className='nav-bar'>
      <div className='nav-bar-l'>
        <div className='nav-link homepage'>
          <NavItem exact to='/'>
            <ClairvoyantLogo className='icon logo' />
          </NavItem>
        </div>
      </div>
      <div className='nav-bar-r'>
        {/* TODO: rename 'articles/new' to 'write' */}
        {sessionUser
        ? (
        <Link to='/articles/new'>
          <WriteIcon className='icon write'/>
        </Link>)
        : (
        <Button modal={LoginModal}
                containername='icon-write-btn-ctnr'
                className='icon-write-btn'
                redirect='/write'>
          <WriteIcon className='icon write'/>
        </Button>)
      }
        <div className='nav-link session'>
          {sessionLink}
        </div>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
