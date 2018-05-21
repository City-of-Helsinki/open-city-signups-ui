import React from 'react';


//import styles from './landing.scss';


const LandingPage = props =>{
  return(
    <div className='App'>
      <p className='App-intro'>
        {props.title}
      </p>
      {/*<section className={styles.koroBg}>
        <div className={styles.logoHel}>Logo</div>
        <div className={styles.koroContent}>
          Foobar
        </div>
      </section>*/}
    </div>
  );
};

export default LandingPage;
