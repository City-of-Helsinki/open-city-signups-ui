import React from 'react';
import PropTypes from 'prop-types';

import styles from './texts.scss';

const Texts = props =>{
  return(
    <div className={styles.containerText}>
      <p className={styles.Heading}>
        {props.heading ? props.heading : 
          'The standard Lorem Ipsum passage, used since the 1500s'}
      </p>
      <p className={styles.bodytext}>
        { props.bodytext ? props.bodytext : 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
      </p>
    </div>
  );
};

Texts.propTypes = {
  heading: PropTypes.string.isRequired,
  bodytext: PropTypes.string.isRequired,
};

export default Texts;
