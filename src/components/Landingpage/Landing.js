import React from 'react';

import SectionOne from '../Sectionone/Sectionone';

import styles from './landing.scss';

const LandingPage = props =>{
  return(
    <div className={styles.App}>
      <SectionOne/>
    </div>
  );
};

export default LandingPage;
