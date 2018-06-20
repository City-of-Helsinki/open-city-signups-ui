import React from 'react';
import {connect} from 'react-redux';
import {CallbackComponent} from 'redux-oidc';
import userManager from '../../oidc/userManager';
import {apiError} from '../../api/redux';

class CallbackPage extends React.Component {
  successCallback = () => {
    this.props.history.push('/');
  };

  errorCallback = () => {
    this.props.apiError();
    this.props.history.push('/');
  };

  render() {
    return (
      <CallbackComponent userManager={userManager} successCallback={this.successCallback} errorCallback={this.errorCallback}>
        <span></span>
      </CallbackComponent>
    );
  }
}

export default connect(null, {apiError})(CallbackPage);
