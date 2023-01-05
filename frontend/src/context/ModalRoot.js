// Code from https://www.youtube.com/watch?v=Uj3_Qhc1aS8&ab_channel=ShmojiCodes
// TODO - MAKE ORIGINAL

import { useEffect, useState } from 'react';

import ModalService from './ModalService';
import './Modal.css'


// takes any open components and places them into the dom
const ModalRoot = () => {
  const [modal, setModal] = useState({});

  // this will activate the modal when the page first renders
  useEffect(() => {
    // modall will send two pieces of data: component and props
    ModalService.on('open', ({ component, props }) => {
      setModal({
        component,
        props,
        close: value => {
          setModal({})
        },
      })
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <div className={ ModalComponent ? 'model-root' : '' }>

      { ModalComponent && (
        <ModalComponent
          { ...modal.props }
          close={ modal.close }
          // defaults to display: none
          className={ ModalComponent ? 'disp-block' : '' }
        />
      )}

    </div>
  )
}

export default ModalRoot;
















