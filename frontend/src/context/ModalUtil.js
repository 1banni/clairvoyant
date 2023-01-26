// Source: https://www.youtube.com/watch?v=Uj3_Qhc1aS8&ab_channel=ShmojiCodes


const ModalUtil = {
  // listens for modal events
  // this adds an event based on the name
  // document: variable available throughout application)
  // takes event (event here is always going to be a string called 'open')
  // the cb passed in will be the
  listen(event, cb) {
    document.addEventListener(event, (e) => cb(e.detail));
  },
  // sends modal events
  // whenever a modal is open, it's dispatching a new event called open with the values
  // detail: {component, props}
  open(component, props = {}) {
    document.dispatchEvent(new CustomEvent('open', { detail: {
      component, props }
    }));
  },
};

export default ModalUtil;
