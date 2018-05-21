import React from 'react';

import styles from './sectionone.scss';

const SectionOne = props =>{
  return(
    <div className='App'>
      <section className={styles.koroBg}>
        <p className={styles.koroContent}>Oma.Helsinki</p>
      </section>
    </div>
  );
};

export default SectionOne;
