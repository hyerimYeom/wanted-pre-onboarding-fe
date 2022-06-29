import { render } from '@testing-library/react';
import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  function formHandleChange(event) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: `${event.target.value}`,
      };
    });
  }
  //   const [password, setPassword] = useState('');
  console.log(formData);
  return (
    <div className={'loginBar'}>
      <input
        type="text"
        value={formData.id}
        name="id"
        placeholder="id"
        onChange={formHandleChange}
      />
      <input
        type="password"
        value={formData.password}
        name="password"
        placeholder={'password'}
        onChange={formHandleChange}
      />
      <button>로그인</button>
    </div>
  );
};

export default Login;
