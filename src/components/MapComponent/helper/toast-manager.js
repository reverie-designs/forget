import React, { useState } from "react";

const Ctx = React.createContext();

const ToastContainer = props => (
  <div style={{ position: "fixed", right: 0, top: 0 }} {...props} />
);
const Toast = ({ children, onDismiss }) => (
  <div
    style={{
      background: "yellow",
      cursor: "pointer",
      fontSize: 14,
      margin: 10,
      padding: 10
    }}
    onClick={onDismiss}
  >
    {children}
  </div>
);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = content => {
    const id = 0;
    const toast = { content, id };
    setToasts([toast]);
  };
  const removeToast = id => {
    const newToasts = toasts.filter(t => t.id !== id);
    setToasts(newToasts);
  };
  
  const onClose = id => () => removeToast(id);

  return (
    <Ctx.Provider value={{ createToast, removeToast }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onClose(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

export const useToasts = () => React.useContext(Ctx);

// add to map componenet
// import { ToastProvider, useToasts } from "./toast-manager";

// function Toast() {
//   const { createToast } = useToasts();
//   return (
//     <button onClick={() => createToast("Patient Outside GeoFence")}>
//       Add toast
//     </button>
//   );
// }