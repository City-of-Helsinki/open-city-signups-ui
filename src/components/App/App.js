import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../footer/Footer';

class App extends Component {

  render() {
    return (
      <main>
        <Header/>
        {this.props.children}
        <Footer/>
      </main>
    );
  }
}

export default App;
