import React from 'react';

import userManager from '../../oidc/userManager'; 
import Section from '../SectionGeneric/Section';
import styles from './landing.scss';
import iphone from '../../assets/iphone.svg';

const buttonClickHandler = () => {
  userManager.signinRedirect();
};

const LandingPage = props => {
  return(
    <div >
      <Section
        bgcolor='Oma'
        image={true}
        img={iphone}
        heading='Yhdellä tunnuksella monta mahdollisuutta'
        bodytext='Helsingin kaupunki kokeilee ja kehittää koko ajan uusia verkkopalveluita asukkaidensa arjen helpottanmiseksi. Rekisteröitymällä oma.helsinki käyttäjäksi pääset käyttämään uusia palveluita yhdellä helpolla kirjautumisella.'
      />
      <div className={styles.koroBg}>
        <Section 
          heading='Etsimme testaajia'
          bodytext='Kokeile ja käytä helsingin uusia digitaalisia palveluita yksillä tunnuksilla. Ilmoittaudu mukaan Beta testaukseen.'
          button={true}
          buttonlabel='Signup For Beta testing'
          buttonsize='btn btn-sm'
          buttoncolor='info'
          onButtonClick={buttonClickHandler}/>
      </div>
    </div>
  );
};

export default LandingPage;
