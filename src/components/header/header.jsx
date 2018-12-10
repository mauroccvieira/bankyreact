import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCarousel,
  Progress,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import * as data from './data.jsx';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-text-white.svg';
import profilephoto from '../../assets/images/users/1.jpg';

const lightTextStyles = {
  height:55
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.showMobilemenu = this.showMobilemenu.bind(this);
    this.sidebarHandler = this.sidebarHandler.bind(this);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  /*--------------------------------------------------------------------------------*/
  /*To open Search Bar                                                              */
  /*--------------------------------------------------------------------------------*/
  toggleMenu() {
    document.getElementById('search').classList.toggle('show-search');
  }
  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  /*--------------------------------------------------------------------------------*/
  /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
  /*--------------------------------------------------------------------------------*/
  showMobilemenu() {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  }
  sidebarHandler = () => {
    let element = document.getElementById('main-wrapper');
    switch (this.props.data.settings[0].sidebartype) {
      case 'full':
      case 'iconbar':
        element.classList.toggle('mini-sidebar');
        if (element.classList.contains('mini-sidebar')) {
          element.setAttribute('data-sidebartype', 'mini-sidebar');
        } else {
          element.setAttribute(
            'data-sidebartype',
            this.props.data.settings[0].sidebartype
          );
        }
        break;

      case 'overlay':
      case 'mini-sidebar':
        element.classList.toggle('full');
        if (element.classList.contains('full')) {
          element.setAttribute('data-sidebartype', 'full');
        } else {
          element.setAttribute(
            'data-sidebartype',
            this.props.data.settings[0].sidebartype
          );
        }
        break;

      default:
    }
  };

  render() {
    return (
      <header
        className="topbar navbarbg"
        data-navbarbg={this.props.data.settings[0].navbarbg}
      >
        <Navbar
          className={
            'top-navbar ' +
            (this.props.data.settings[0].navbarbg === 'skin6'
              ? 'navbar-light'
              : 'navbar-dark')
          }
          expand="md"
        >
          <div
            className="navbar-header"
            id="logobg"
            data-logobg={this.props.data.settings[0].logobg}
          >
            {/*--------------------------------------------------------------------------------*/}
            {/* Mobile View Toggler  [visible only after 768px screen]                         */}
            {/*--------------------------------------------------------------------------------*/}
            <a
              className="nav-toggler d-block d-md-none text-white"
              onClick={this.showMobilemenu}
            >
              <i className="ti-menu ti-close" />
            </a>
            {/*--------------------------------------------------------------------------------*/}
            {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
            {/*--------------------------------------------------------------------------------*/}
            <NavbarBrand href="/">             
              <span className="logo-text">
                <img src={logodarktext} alt="homepage" className="dark-logo" />
                <img
                  src={logolighttext}
                  style={lightTextStyles}
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </NavbarBrand>
            {/*--------------------------------------------------------------------------------*/}
            {/* Mobile View Toggler  [visible only after 768px screen]                         */}
            {/*--------------------------------------------------------------------------------*/}
            <a
              className="topbartoggler d-block d-md-none text-white"
              onClick={this.toggle}
            >
              <i className="ti-more" />
            </a>
          </div>
          <Collapse
            className="navbarbg"
            isOpen={this.state.isOpen}
            navbar
            data-navbarbg={this.props.data.settings[0].navbarbg}
          >
            <Nav className="float-left" navbar>
              <NavItem>
                <NavLink
                  href="#"
                  className="d-none d-md-block"
                  onClick={this.sidebarHandler}
                >
                  <i className="ti-menu" />
                </NavLink>
              </NavItem>                           
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
export default Header;
