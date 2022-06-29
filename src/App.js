import React from 'react';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  const state = {
    login: false,
  };
  // return <PreAssignmentGuide />;
  return <>{!state.login ? <Login /> : <MainPage />}</>;
}

export default App;
