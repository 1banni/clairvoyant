// https://www.youtube.com/watch?v=Uj3_Qhc1aS8&ab_channel=ShmojiCodes
// TODO: DELETE
import { Modal } from './Modal';
import ModalBody from './ModalBody';

const TestModal = props => {
  return (
    <Modal>
      <ModalBody>
        <div><p>in the test modal</p></div>
      </ModalBody>
      <button onClick={ props.close } className="btn">Close Modal</button>
    </Modal>
  )
}



export default TestModal;
