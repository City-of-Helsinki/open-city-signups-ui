import React from 'react';

import Section from '../SectionGeneric/Section';



import iphone6 from '../../assets/iPhone6.png';
const Heading = 'Yhdellä tunnuksella monta mahdollisuutta';
const Bodytext = 'Helsingin kaupunki kokeilee ja kehittää koko ajan uusia verkkopalveluita asukkaidensa arjen helpottanmiseksi. Rekisteröitymällä oma.helsinki käyttäjäksi pääset käyttämään uusia palveluita yhdellä helpolla kirjautumisella.';

const LandingPage = props =>{
  return(
    <div>
      <Section 
        bgcolor='Oma'
        image={true}
        img={iphone6}
        heading={Heading}
        bodytext={Bodytext}/>
    </div>
  );
};

export default LandingPage;
