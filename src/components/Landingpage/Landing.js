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
              {props.isSuccess && <Info text='Kiitos liittymisestäsi betatestaajaksi! Lähetimme lisätietoja sähköpostiisi.' />}
              {props.signupExists && <Info text='Olet jo aikaisemmin liittynyt betatestaajaksi.' />}
              {props.isError && <Error text='Jokin meni pieleen.' />}
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
                bodytext='Helsingin kaupunki kokeilee ja kehittää koko ajan uusia verkkopalveluita asukkaidensa arjen helpottamiseksi. Parhaillaan kehitämme oma.helsinki-palvelua, jonka kautta pääset käyttämään uusia palveluita yhdellä helpolla kirjautumisella.'
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
                heading='Etsimme nyt betatestaajia'
                bodytext='Ilmoittaudu Helsinki-sovelluksen testikäyttäjäksi! Betatesti käynnistyy kesäkuun lopulla ja jatkuu kesän ajan.'
              />
              <Texts
                bodytext='Helsinki-sovelluksessa testaamme erityisesti oma.helsinki-kirjautumista ja siihen liitettyä digikirjastokorttia. Keräämme sovelluksen käytöstä anonyymiä käyttäjätietoa, kuten sovelluksen kaatumisraportit ja tiettyjen toiminnallisuuksien käyttö. Tämän lisäksi toivomme sanallista palautetta sovelluksen sisäisen palautetoiminnallisuuden kautta.'
              />
              <Texts
                bodytext='Betatestaajaksi voi ilmoittautua mikäli omistaa Android-älypuhelimen. Sovellus jaellaan Googlen Play Storen kautta. Testaajien tulee olla iältään vähintään 16 vuotta.'
              />
              <Button color='oma' onClick={buttonClickHandler} className={styles.signupButton}>
                Rekisteröidy betatestaajaksi
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
