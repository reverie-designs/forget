import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ YouCanPassAnyProps, closeToast }) => (
  <i
    className="material-icons"
    onClick={closeToast}
  >
  delete
  </i>
);

export default function ToastifyPopUp(props) {

const data = [{
  id: 25,
  completed: false,
  time: 'Tue Jan 14 2020 16:12:10 GMT-0500 (Eastern Standard Time)',
  pills: false,
  appointment: true,
  food: false,
  info: "Hope this works!",
  patient: false
}, 
{
  id: 26,
  completed: false,
  time: 'Tue Jan 14 2020 16:30:10 GMT-0500 (Eastern Standard Time)',
  pills: true,
  appointment: false,
  food: true,
  info: "It will work!",
  patient: false
}
]

// toast.update(this.toastId, {
//   render: "New Content",
//   type: toast.TYPE.INFO,
//   //Here the magic
//   className: 'slide animated'
// })
 
  // const notifyA = () => toast('Wow so easy !', {containerId: 'A'});

  // const notifyB = () => toast(data.info, {containerId: data.id});

  
  const findMYTHINGY = data.map((dat) => {
      const notificationPopUp = toast(dat.info, {containerId: dat.id})
      // toast(dat.info, {containerId: dat.id})
      setTimeout((notificationPopUp), 2000);
      return   <ToastContainer transition={Slide} autoClose={false} enableMultiContainer containerId={dat.id} newestOnTop={true} onClick={() => saySomething(dat.id)} position={toast.POSITION.BOTTOM_LEFT}></ToastContainer>
  });
  // const showMeNotification = setTimeout((notifyB), 2000);
  // const saySomething = (id)=>{console.log("HELLO", id)}


    // const showMeNotification = setTimeout((notifyB), 2000);
    const saySomething = (id)=>{console.log("HELLO", id)}
    return (
      <div>
        
          {/* {showMeNotification} */}
          {findMYTHINGY}
          {/* {/* <button onClick={notifyA}>Notify A !</button> */}
          {/* <button onClick={notifyA}> Notif A !</button>           */}
      </div>
    );
}
