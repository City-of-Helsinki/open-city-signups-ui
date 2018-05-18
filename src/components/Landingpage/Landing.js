import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

import styles from './landing.scss';
import logo from '../../assets/logo.svg';

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
      <FontAwesomeIcon 
        className='super-crazy-colors'
        name='rocket'
        icon={faUser}
        size='4x'
        spin
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/>

      <section className={styles.koroBg}>
        <p className={styles.koroContent}>Foobar</p>
      </section>
    </div>
  );
};

export default LandingPage;
