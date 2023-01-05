import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';

import ModalUtil from './ModalUtil';
import './Modal.css'

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState({});
  const modalRef = useRef();
  const close = () => setModal({});

  // this will activate the modal when the page first renders
  useEffect(() => {
    // modal will send two pieces of data: component and props
    ModalUtil.listen('open', ({ component, props }) => {
      setModal({ component, props, close })
    });
  }, []);

  const Modal = modal.component ? modal.component : null;

  // the magic of this is that events bubble up to the parent (propogate it up to div)
  return ReactDOM.createPortal(
    <div className={ Modal ? 'portal' : '' }>
      { Modal && (
        <Modal
          { ...modal.props }
          close={ modal.close }
          // defaults to display: none
          className={ Modal ? 'disp-block' : '' }
        />
      )}
      <div ref={modalRef} />
    </div>,
    document.getElementById('portal')
  )
}

  // return ReactDOM.createPortal(
  // <div id="modal disp-block">
  //     <div id="modal-background" /* TODO? */ /*onClick={onClose}*/>
  //       <div id="modal-content">
  //         {children}
  //       </div>
  //     </div>
  //   </div>,
  //   document.getElementById('portal'))
  // QUESTION: WHAT DOES THIS DO?
  // const modalNode = useContext(ModalContext);
  // if (!modalNode) return null;

  // return ReactDOM.createPortal(
  // <div id="modal disp-block">
  //     <div id="modal-background" /* TODO? */ /*onClick={onClose}*/>
  //       <div id="modal-content">
  //         {children}
  //       </div>
  //     </div>
  //   </div>,
    // document.getElementById('portal')
    // modalNode
  // )


