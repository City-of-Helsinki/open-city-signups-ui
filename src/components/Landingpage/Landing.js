import React from 'react';
import {connect} from 'react-redux';
import {UncontrolledAlert} from 'reactstrap';

import userManager from '../../oidc/userManager'; 
import Section from '../SectionGeneric/Section';
import styles from './landing.scss';
import iphone from '../../assets/iphone.svg';

const buttonClickHandler = () => {
  userManager.signinRedirect();
};

const Info = props => {
  return (
    <UncontrolledAlert color='info'>
      {props.text}
    </UncontrolledAlert>
  );
};

const Error = props => {
  return (
    <UncontrolledAlert color='danger'>
      {props.text}
    </UncontrolledAlert>
  );
};

const LandingPage = props => {
  return (
    <div className={styles.koroBg}>
      {props.isSuccess && <Info text='Sign up registered! Follow your email.' />}
      {props.signupExists && <Info text='You have already signed up.' />}
      {props.isError && <Error text='Something went wrong.' />}
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
          buttonlabel='Rekisteröidy Beta-testaukseen'
          buttonsize='btn btn-sm'
          buttoncolor='info'
          onButtonClick={buttonClickHandler}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isError: state.api.isError,
    isSuccess: state.api.isSuccess,
    signupExists: state.api.signupExists,
  };
};
export default connect(mapStateToProps)(LandingPage);
