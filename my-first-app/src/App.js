import React from 'react';
import MyButton from './Components/Assignment1/MyButton';
import Form  from './Components/Form/Form.js';
import Modal from './Components/Modal/Modal.js';
import MyStyle from './Components/Assignment1/MyStyle.css';

function App() {
  const isModalVisible = false;
  return (
    <>
      <div className = {isModalVisible ? "blur" : ""}>
        <MyButton/>
        <Form/>
      </div>
      <div>
        <Modal/>
      </div>
    </>
  );
}  


export default App;
