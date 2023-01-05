// Code from https://www.youtube.com/watch?v=Uj3_Qhc1aS8&ab_channel=ShmojiCodes
// TODO - MAKE ORIGINAL


const ModalService = {
  // listens for modal events
  on(event, cb) {
    // this adds an event based on the name
    // document: variable available throughout application)
    // takes event (event here is always going to be a string called 'open')
    document.addEventListener(event, (e) => cb(e.detail));
  },
  // sends modal events
  open(component, props = {}) {
    // whenver a modal is open, it's dispatching a new event called open with the values
    // detail: {component, props}
    console.count('ModalService#open');
    document.dispatchEvent(new CustomEvent('open', { detail: { component, props } }));
  },
};

export default ModalService
