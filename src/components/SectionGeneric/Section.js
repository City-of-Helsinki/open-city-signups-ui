import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';

import Texts from '../Texts/Texts';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

import styles from './section.scss';


const SectionButton = props => {
  return (
    <div className={styles.containerButton}>
      <Button color={props.buttoncolor} className={props.buttonsize} onClick={props.onClick}>
        {props.buttonlabel}
        <FontAwesomeIcon 
          icon={faArrowRight}
          name='arrowRight'
          className={styles.arrow}
        />
      </Button>
    </div>
  );
}

const SectionImage = props => {
  return(
    <div className={styles.containerIphone}>
      <img src={props.img} alt='Phone' className={styles.iphone}/>
    </div>
  );
}

const Section = props => {
  return(
    <div className={props.bgcolor === 'Oma' ? styles.koroBgOma : styles.koroBgWhite}>
      <div className={styles.containerText}>
        <Texts heading = {props.heading} bodytext={props.bodytext}/>
        {props.button ? <SectionButton
          onClick={props.onButtonClick}
          buttonlabel={props.buttonlabel} 
          buttonsize={props.buttonsize}
          buttoncolor={props.buttoncolor}/> : ''}
      </div>
      {props.image ? <SectionImage img={props.img}/> : ''}
    </div>
  );
};

Section.propTypes = {
  bgcolor: PropTypes.string,
  heading: PropTypes.string,
  bodytext: PropTypes.string,
  button: PropTypes.bool,
  buttonlabel: PropTypes.string,
  buttonsize: PropTypes.string,
  buttoncolor: PropTypes.string,
  buttonClick: PropTypes.func,
  image: PropTypes.bool,
  img: PropTypes.node,
};


export default Section;
