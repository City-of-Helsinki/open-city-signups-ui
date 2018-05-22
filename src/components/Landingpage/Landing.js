import React from 'react';


//import styles from './landing.scss';


const LandingPage = props =>{
  return(
    <div className='App'>
      <p className='App-intro'>
        {props.title ? props.title : 'Landing Page'}
      </p>
     
    </div>
  );
};

export default LandingPage;
