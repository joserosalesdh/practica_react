import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
 
function App() {
  return (
    <Fragment>
      <Sidebar />
      <MainContent/>
    </Fragment>
  );
}
 
export default App;
