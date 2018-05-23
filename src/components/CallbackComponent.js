import React from 'react';
import {CallbackComponent} from 'redux-oidc';
import userManager from '../oidc/userManager';

class CallbackPage extends React.Component {
  callback = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <CallbackComponent userManager={userManager} successCallback={this.callback} errorCallback={this.callback}>
        <div>
          Redirecting...
        </div>
      </CallbackComponent>
    );
  }
}

export default CallbackPage;
