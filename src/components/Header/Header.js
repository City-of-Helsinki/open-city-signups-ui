import React from 'react';
import propTypes from 'prop-types';

import styles from './header.scss';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
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
        <div className={styles.logo}> 
          <p className={styles.logoTitle}>
            {this.props.logoTitle ? this.props.logoTitle : 'Oma.Helsinki'}
          </p>
        </div>
      
        <div className={styles.loginSide}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon 
              className={styles.userIcon}
              icon={this.props.leftIcon ? `fa${this.props.leftIcon}` : faGlobe}
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
              </DropdownToggle>
              <DropdownMenu>
                {this.props.languages.map((lang, index)=> <div 
                  className={styles.langDiv }
                  onClick={this.toggle}
                  key={index}>{lang}</div>)}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon 
              className={styles.userIcon}
              icon={this.props.leftIcon ? `fa${this.props.leftIcon}` : faUser}
              name={this.props.leftIcon ? `${this.props.leftIcon}` : 'User'}
            />
            {this.props.leftTitle ? this.props.leftTitle : 'Login'}
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoTitle: propTypes.string,
  leftIcon: propTypes.string,
  languages: propTypes.array,
};

export default Header;
