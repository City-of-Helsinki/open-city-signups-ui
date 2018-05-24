import React from 'react';

import HelLogo from '../../assets/helsinki-logo.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import styles from './footer.scss';



const Footer = props =>{
  return(
    <div className={styles.koroFooter}>
      <div className={styles.logoContainer}>
        <img src={HelLogo} alt='Helsinki-logo' className={styles.logo}/>
      </div>
      <div className={styles.socialIconsContainer}>
        <a 
          href='https://www.facebook.com/myhelsinki '
          target='_blank' 
          rel='noopener noreferrer'>
          <FontAwesomeIcon 
            name = 'facebook'
            size ='2x'
            icon = {faFacebook}
            className={styles.icons}
          />
        </a>
        <a 
          href='https://www.instagram.com/myhelsinki'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon 
            name = 'instagram'
            size ='2x'
            icon = {faInstagram}
            className={styles.icons}/>
        </a>
        <a 
          href='https://www.youtube.com/user/Visithelsinki' 
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon 
            name = 'youtube'
            size ='2x'
            icon = {faYoutube}
            className={styles.icons}/>
        </a>
        <a 
          href='https://twitter.com/myhelsinki' 
          target='_blank' 
          rel='noopener noreferrer'>
          <FontAwesomeIcon 
            name = 'twitter'
            size ='2x'
            icon = {faTwitter}
            className={styles.icons}/>
        </a>
      </div>
    </div>
  );
};
export default Footer;
