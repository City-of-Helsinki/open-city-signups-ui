import React from 'react';
import {Col, Container, Row} from 'reactstrap';

import HelLogo from '../../assets/helsinki-logo.svg';
import styles from './header.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <Col>
            <img src={HelLogo} alt='Helsinki Logo'/>
            <span className={styles.title}>Oma.Helsinki</span>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
