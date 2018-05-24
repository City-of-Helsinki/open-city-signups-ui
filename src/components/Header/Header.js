import React from 'react';
import propTypes from 'prop-types';

import styles from './header.scss';

import HelLogo from '../../assets/helsinki-logo.svg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import faCaret from '@fortawesome/fontawesome-free-solid/faCaretDown';
import {Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

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
        <div className={styles.loginSide}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon 
              className={styles.userIcon}
              icon={this.props.leftIcon ? this.props.leftIcon : faGlobe}
              name={this.props.leftIcon ? `${this.props.leftIcon}` : 'globe'}
            />
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                tag="span"
                onClick={this.toggle}
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}
              >
          EN
                <FontAwesomeIcon 
                  className={styles.caret}
                  icon={faCaret}
                  name='caretdown'
                />
              </DropdownToggle>
              <DropdownMenu>
                {this.props.languages.map((lang, index)=> <div 
                  className={styles.langDiv }
                  onClick={this.toggle}
                  key={index}>{lang}</div>)}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logo: propTypes.node,
  logoTitle: propTypes.string,
  leftIcon: propTypes.node,
  languages: propTypes.array,
};

export default Header;
