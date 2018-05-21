import React from 'react';
import Footer from '../footer/Footer';

//import styles from './landing.scss';


const LandingPage = props =>{
  return(
    <div className='App'>
      <p className='App-intro'>
        {props.title}
      </p>
      <Footer/>
    </div>
  );
};

export default LandingPage;
