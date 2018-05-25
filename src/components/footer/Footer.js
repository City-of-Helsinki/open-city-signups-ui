import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';

import HelLogo from '../../assets/helsinki-logo.1.svg';
import styles from './footer.scss';

const socialIcons = [
  {
    href: 'https://www.facebook.com/myhelsinki',
    icon: faFacebook,
  },
  {
    href: 'https://www.instagram.com/myhelsinki',
    icon: faInstagram,
  },
  {
    href: 'https://www.youtube.com/user/Visithelsinki',
    icon: faYoutube,
  },
  {
    href: 'https://twitter.com/myhelsinki',
    icon: faTwitter,
  },
];

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <Container>
        <Row className='justify-content-center'>
          <Col xs='auto'>
            <img src={HelLogo} alt='Helsinki-logo' className={styles.logo}/>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          {socialIcons.map(item => {
            return (
              <Col xs={true} sm='auto' key={item.href}>
                <a href={item.href} target='_blank' rel='noopener noreferrer' className={styles.icon}>
                  <FontAwesomeIcon size='2x' icon={item.icon}/>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
