import React from 'react';
import PropTypes from 'prop-types';

import styles from './texts.scss';

const Texts = props => {
  return(
    <div>
      <h2 className={styles.heading}>
        {props.heading}
      </h2>
      <p className={styles.body}>
        {props.bodytext}
      </p>
    </div>
  );
};

Texts.propTypes = {
  heading: PropTypes.string,
  bodytext: PropTypes.string.isRequired,
};

export default Texts;
