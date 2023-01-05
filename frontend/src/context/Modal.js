import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';

import ModalService from './ModalService';
import './Modal.css'

export function Modal(props) {
  return (
    <div id="modal">
      <div id="modal-background" /* TODO? */ /*onClick={onClose}*/>
        <div id="modal-content">
          {props.children}
        </div>
      </div>
      <button onClick={ props.close } className="btn">Close Modal</button>
    </div>
  )
}

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  // const modalRef = useRef();
  const [modal, setModal] = useState({});

  // this will activate the modal when the page first renders
  useEffect(() => {
    // modal will send two pieces of data: component and props
    ModalService.on('open', ({ component, props }) => {
      setModal({ component, props, close: (val) => {
          console.count('Modal.js useEffect - closing modal ');
          setModal({});
        },
      })
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <div className={ ModalComponent ? 'modal-root' : '' }>

      { ModalComponent && (
        <ModalComponent
          { ...modal.props }
          close={ modal.close }
          // defaults to display: none
          className={ ModalComponent ? 'disp-block' : '' }
        />
      )}
      {/* <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider> */}
      {/* <div ref={modalRef} /> */}
      {/* <div><button onclick={ modal.close } className="btn">Close Modal</button></div> */}
    </div>
  )
}

// the magic of this is that events bubble up to the parent (propogate it up to div)
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


