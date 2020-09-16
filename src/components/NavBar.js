import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

class Layout extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: '1rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'white', color: 'black' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
       <MDBNavbar
              color='primary-color'
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
          <MDBNavbarBrand>
            <strong className='white-text'>JohnMogi</strong><br/>
            חשיבה | עיצוב | פרונט
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
          
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link'>Register</a>
                </Link>
              </MDBNavItem>
        
              <MDBNavItem>
                <Link href='/about'>
                  <a className='nav-link'>About</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/register'>
                        <a>Register</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/register'>
                        <a>Register</a>
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className='md-form my-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='text'
                      placeholder='Search'
                      aria-label='Search'
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default Layout;
