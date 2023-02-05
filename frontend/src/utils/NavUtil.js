

const NavUtil = {
  goToUserById(history, id) {
    return () => history.push(`/users/${id}`);
  }
}

export default NavUtil;