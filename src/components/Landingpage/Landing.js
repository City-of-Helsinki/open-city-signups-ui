import React from 'react';
import {connect} from 'react-redux';
import {Button, Col, Container, Row, UncontrolledAlert} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

import userManager from '../../oidc/userManager';
import Texts from '../Texts/Texts';
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
  return(
    <div>
      <section className={styles.alertSection}>
        <Container>
          <Row>
            <Col>
              {props.isSuccess && <Info text='Sign up registered! Follow your email.' />}
              {props.signupExists && <Info text='You have already signed up.' />}
              {props.isError && <Error text='Something went wrong.' />}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.upperSection}>
        <Container>
          <Row>
            <Col xs='12' md='6'>
              <Texts
                heading='Yhdellä tunnuksella monta mahdollisuutta'
                bodytext='Helsingin kaupunki kokeilee ja kehittää koko ajan uusia verkkopalveluita asukkaidensa arjen helpottanmiseksi. Rekisteröitymällä oma.helsinki käyttäjäksi pääset käyttämään uusia palveluita yhdellä helpolla kirjautumisella.'
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.lowerSection}>
        <Container>
          <Row>
            <Col xs='12' md='6'>
              <Texts
                heading='Etsimme testaajia'
                bodytext='Kokeile ja käytä helsingin uusia digitaalisia palveluita yksillä tunnuksilla. Ilmoittaudu mukaan Beta testaukseen.'
              />
              <Button color='oma' onClick={buttonClickHandler} className={styles.signupButton}>
                Rekisteröidy Beta-testaukseen
                <FontAwesomeIcon 
                  icon={faArrowRight}
                  className={styles.arrow}
                />
              </Button>
            </Col>
            <Col md='6'>
              <div className={styles.phoneWrapper}>
                <img src={iphone} alt='' className={styles.phone} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
