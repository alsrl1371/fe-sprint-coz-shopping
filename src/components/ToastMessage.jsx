import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = () => {
  return (
    <div>
      <ToastContainer position='top-center' autoClose={1500} />
    </div>
  );
};

export default ToastMessage;
