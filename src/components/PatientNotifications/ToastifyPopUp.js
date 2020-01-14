import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ToastifyPopUp(props) {

const data = {
  id: 25,
  completed: false,
  time: 'Tue Jan 14 2020 16:12:10 GMT-0500 (Eastern Standard Time)',
  pills: false,
  appointment: false,
  food: true,
  info: "Hurray",
  patient: false
}

// toast.update(this.toastId, {
//   render: "New Content",
//   type: toast.TYPE.INFO,
//   //Here the magic
//   className: 'slide animated'
// })
 
  const notifyA = () => toast('Wow so easy !', {containerId: 'A'});
  const notifyB = () => toast(data.info, {containerId: data.id});
    const showMeNotification = setTimeout((notifyB), 2000);
    return (
      <div>
          <ToastContainer transition={Slide} autoClose={false} enableMultiContainer containerId={'A'} newestOnTop={true} position={toast.POSITION.BOTTOM_LEFT} />
          <ToastContainer transition={Slide} autoClose={false} enableMultiContainer containerId={data.id} newestOnTop={true} closeOnClick={false} position={toast.POSITION.BOTTOM_LEFT} />
          {showMeNotification}
          {/* {/* <button onClick={notifyA}>Notify A !</button> */}
          <button onClick={notifyA}> Notif A !</button>          
      </div>
    );
}
