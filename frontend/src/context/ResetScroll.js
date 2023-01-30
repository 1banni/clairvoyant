import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ResetScroll({ history }) {
  useEffect(() => {
    const callback = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      callback();
    }
  }, [history]); // TODO: confirm that adding history here did not introduce a bug
  return null;
}

export default withRouter(ResetScroll);