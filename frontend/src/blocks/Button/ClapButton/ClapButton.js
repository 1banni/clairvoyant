import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PNG } from '../../../assets';
import Button from '../Button';
import { createClap, deleteClap, selectClapId, selectClapsByArticleId } from '../../../store/claps';
import './ClapButton.css';
import LoginModal from '../../../modals/LoginModal';
import ModalUtil from '../../../context/ModalUtil';

const ClapButton = ({article, ...props}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const claps = useSelector(selectClapsByArticleId(article?.id));
  const clapId = useSelector(selectClapId(article?.id, sessionUser?.id))

  const toggleClap = async e => {

    e.preventDefault();
    if (!sessionUser) ModalUtil.open(LoginModal);

    if (clapId) {
      dispatch(deleteClap(clapId));
    } else {
      dispatch(createClap({
        user_id: sessionUser.id,
        article_id: article.id
      }))
    }
  }

  const ClapImg = (clapId ? PNG.CLAP_ICON_TRUE : PNG.CLAP_ICON_FALSE);
  return (
    <div className='clap'>
      <Button className='icon-btn clap'
              containername='icon-ctnr clap'
              onClick={toggleClap}>
        <img className='clap-img' src={ClapImg} size='100px' alt='clap-img'/>
      </Button>
      <div className='clap-ct'>{claps?.length}</div>
    </div>
  )
}

export default ClapButton;