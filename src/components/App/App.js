import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../footer/Footer';

const langArray = ['English', 'Suomi', 'Svenska', 'Deutsch', '日本語', 'Русский'];

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
