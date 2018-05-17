import React from 'react';
import logo from '../../assets/logo.svg'
import FontAwesome from 'react-fontawesome';
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
      <FontAwesome 
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/>
    </div>
  );
};

export default LandingPage;
