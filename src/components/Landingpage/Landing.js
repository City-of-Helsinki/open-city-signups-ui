import React from 'react';

import Section from '../SectionGeneric/Section';

import styles from './landing.scss';
import iphone6 from '../../assets/iPhone6.png';

const LandingPage = props => {
  return(
    <div className={styles.koroBg}>
      <Section
        bgcolor='Oma'
        image={true}
        img={iphone6}
        heading='Yhdellä tunnuksella monta mahdollisuutta'
        bodytext='Helsingin kaupunki kokeilee ja kehittää koko ajan uusia verkkopalveluita asukkaidensa arjen helpottanmiseksi. Rekisteröitymällä oma.helsinki käyttäjäksi pääset käyttämään uusia palveluita yhdellä helpolla kirjautumisella.'
      />
      <Section 
        heading='Etsimme testaajia'
        bodytext='Kokeile ja käytä helsingin uusia digitaalisia palveluita yksillä tunnuksilla. Ilmoittaudu mukaan Beta testaukseen.'
        button={true}
        buttonlabel='Signup For Beta testing'
        buttonsize='btn btn-sm'
        buttoncolor='info'/>
    </div>
  );
};

export default LandingPage;
