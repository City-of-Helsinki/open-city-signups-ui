import React from 'react';

import Header from '../Header/Header';

const langArray = ['English', 'Suomi', 'Svenska', 'Deutsch', '日本語', 'Русский'];


const LandingPage = props =>{
  return(
    <div className='App'>
      <Header languages={langArray}/>
      <p className='App-intro'>
        {props.title}
      </p>
    </div>
  );
};

export default LandingPage;
