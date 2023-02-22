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
import SearchBar from './SearchBar';

function NavBar() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);
  const [colorToggle, setColorToggle] = useState('white');
  const [fixed, setFixed] = useState('nav-bar-wrapper');
  const onSearchPage = location.pathname.includes('/search/');
  const landingPage = sessionUser ? '/home' : '/';

  useEffect(()=> {
    location.pathname === '/'
      ? setColorToggle(prev => 'yellow')
      : setColorToggle(prev => 'white');
  }, [location]);

  const toggleFixed = () => {
    window.scrollY > 535
      ? setFixed('nav-bar-wrapper fixed')
      : setFixed('nav-bar-wrapper');
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
          <NavItem exact to={landingPage}>
            <ClairvoyantLogo className='icon logo' />
          </NavItem>
        </div>

        {sessionUser && !onSearchPage
        ? <SearchBar />
        : <div></div>}
      </div>
      <div className='nav-bar-r'>

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
