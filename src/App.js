import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (!loginState) {
      setLoginState(false);
    }
    console.log('in App', formData);
  }, []);

  // return <PreAssignmentGuide />;
  return <>{!loginState ? <Login /> : <MainPage />}</>;
}

export default App;
