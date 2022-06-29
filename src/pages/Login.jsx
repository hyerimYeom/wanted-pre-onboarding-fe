import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  console.log(formData);
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    if (checkLogin) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const tryLogin = () => {
    setCheckLogin(true);
    setFormData({ ...formData });
  };

  // function tryLogin() {}

  function formHandleChange(event) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: `${event.target.value}`,
      };
    });
  }

  return (
    <div className={'container'}>
      <div className={'loginBar'}>
        <input
          className={'input'}
          type="text"
          value={formData.id}
          name="id"
          placeholder="id"
          onChange={formHandleChange}
        />
        <input
          className={'input'}
          type="current-password"
          value={formData.password}
          name="password"
          placeholder={'password'}
          onChange={formHandleChange}
        />
        <button onClick={tryLogin}>로그인</button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
