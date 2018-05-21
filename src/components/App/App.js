import React, {Component} from 'react'

class App extends Component {

  render() {
    return (
      <main>
        {/*Header*/}
        {this.props.children}
        {/*Footer*/}
      </main>
    );
  }
}

export default App;
