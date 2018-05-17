import React from 'react';
import logo from '../../assets/logo.svg'
import './landing.css';

const LandingPage = props =>{
  return(
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className='App-intro'>
        {props.title}
      </p>
    </div>
  );
};

export default LandingPage;
