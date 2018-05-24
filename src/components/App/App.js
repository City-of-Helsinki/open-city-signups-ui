import React, {Component} from 'react';

import Header from '../Header/Header';

const langArray = ['English', 'Suomi', 'Svenska', 'Deutsch', '日本語', 'Русский'];


import Footer from '../footer/Footer';


class App extends Component {

  render() {
    return (
      <main>
        <Header languages={langArray}/>
        {this.props.children}
        <Footer/>
      </main>
    );
  }
}

export default App;
