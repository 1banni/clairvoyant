import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import ModalUtil from './ModalUtil';
import './Modal.css'

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState({});
  const modalRef = useRef();
  const close = () => setModal({});

  // activates the button that opens the modal on the page
  // modal will send two pieces of data: component and props
  useEffect(() => {
    ModalUtil.listen('open', ({ component, props }) => {
      setModal({ component, props, close })
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  // the magic of this is that events bubble up to the parent (propogates it up to div)
  return ReactDOM.createPortal(
    <div className={ ModalComponent ? 'portal' : '' }>
      { ModalComponent && (
        <ModalComponent
          { ...modal.props }
          close={ modal.close }
          // defaults to display: none
          className={ ModalComponent ? 'disp-block' : '' }
        />
      )}
      <div ref={modalRef} />
    </div>,
    document.getElementById('portal')
  )
}

