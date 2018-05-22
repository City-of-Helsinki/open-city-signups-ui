import React from 'react';

import Section from '../SectionGeneric/Section';

import styles from './landing.scss';

const Heading = 'Etsimme testaajia';
const Bodytext = 'Kokeile ja käytä helsingin uusia digitaalisia palveluita yksillä tunnuksilla. Ilmoittaudu mukaan Beta testaukseen.';

const LandingPage = props =>{
  return(
    <div className={styles.App}>
      <Section 
        heading={Heading}
        bodytext={Bodytext}
        button={true}
        buttonlabel='Signup For Beta testing'
        buttonsize='btn btn-sm'
        buttoncolor='info'/>
    </div>
  );
};

export default LandingPage;
