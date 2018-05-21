import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import styles from './footer.scss';


const Footer = props =>{
  return(
    <div className={styles.koroFooter}>
      <div className={styles.logoHel}><p className={styles.logoText}>Logo</p></div>
      <div className={styles.socialIconsContainer}>
        <FontAwesomeIcon 
          name = 'facebook'
          size ='2x'
          icon = {faFacebook}
          className={styles.icons}
        />
        <FontAwesomeIcon 
          name = 'instagram'
          size ='2x'
          icon = {faInstagram}
          className={styles.icons}/>
        <FontAwesomeIcon 
          name = 'youtube'
          size ='2x'
          icon = {faYoutube}
          className={styles.icons}/>
        <FontAwesomeIcon 
          name = 'twitter'
          size ='2x'
          icon = {faTwitter}
          className={styles.icons}/>
      </div>
    </div>
  );
};
export default Footer;
