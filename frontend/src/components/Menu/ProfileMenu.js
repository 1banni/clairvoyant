import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import * as sessionActions from '../../store/session';
import MenuItem from "./MenuItem";
import Button from "../../blocks/Button";

function ProfileMenu({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <Button className="icon-btn login-modal"
              container-name="icon-btn-ctnr"
              onClick={openMenu}>
        <ProfileIcon className="icon profile"/>
      </Button>
      {showMenu && (
        <div className="profile-dropdown">
          <MenuItem>{user.name}</MenuItem>
          <MenuItem>{user.email}</MenuItem>
          <Button onClick={logout}>Log Out</Button>
        </div>
    )}
    </>
  );
}

export default ProfileMenu;
