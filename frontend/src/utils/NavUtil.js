

const NavUtil = {
  goToUserById(history, userId) {
    return () => history.push(`/users/${userId}`);
  },
  goToArticleById(history, articleId) {
    return () => history.push(`/articles/${articleId}`);
  },
}

export default NavUtil;