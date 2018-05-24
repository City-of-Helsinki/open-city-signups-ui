import React from 'react';
import propTypes from 'prop-types';

import styles from './header.scss';
import HelLogo from '../../assets/helsinki-logo.svg';

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render(){
    return (
      //The leftside starts here, Helsink Logo and the title
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={this.props.logo ? this.props.logo : HelLogo} alt='Helsinki Logo'/> 
          <p className={styles.logoTitle}>
            {this.props.logoTitle ? this.props.logoTitle : 'Oma.Helsinki'}
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logo: propTypes.node,
  logoTitle: propTypes.string,
  leftIcon: propTypes.node,
};

export default Header;
