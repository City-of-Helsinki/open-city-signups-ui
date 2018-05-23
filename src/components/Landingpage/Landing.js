import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import {FormattedMessage} from 'react-intl';

import styles from './landing.scss';
import logo from '../../assets/logo.svg';
import userManager from '../../oidc/userManager';

const LandingPage = props => {
  const handleSignupClick = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  return(
    <div className='App'>
      <button onClick={handleSignupClick}>Click</button>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'><FormattedMessage id="app.welcome" defaultMessage="Welcome to React" /></h1>
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
