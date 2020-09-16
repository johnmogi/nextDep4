import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBHamburgerToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBIcon
} from 'mdbreact';

class Layout extends React.Component {
  state = {
    collapse1: "",
  };

  toggleSingleCollapse = (collapseId) => () => {
    this.setState({
      [collapseId]: !this.state[collapseId],
    });
  };
  componentDidMount() {
    document.querySelector("nav").style.height = "75px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: "0.2rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleSingleCollapse("collapse2")}
      />
    );
    return (
      <>
       <MDBNavbar
              color='special-color'
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
          {/* <MDBHamburgerToggler
              onClick={this.toggleSingleCollapse("collapse2")}
              isOpen={false}
              id="hamburger2"
            /> */}

         
                <MDBCollapse isOpen={this.state.collapse2} navbar >
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>בית</a>
                </Link>
              </MDBNavItem>
          
        
              <MDBNavItem>
                <Link href='/portfolio'>
                  <a className='nav-link'>תיק עבודות</a>
                </Link>
              </MDBNavItem>
          
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>הבלוגייה</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href='/blog/code'>
                        <a>קוד</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/blog/design'>
                        <a>עיצוב</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/blog/brief'>
                        <a>בריינסטורמינג</a>
                      </Link>
                    </MDBDropdownItem>
             
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/cv'>
                  <a className='nav-link'>קורות חיים</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link'>צרו קשר</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                  {" "}
                  <a id="phone"
                    href="tel:0509382456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn rounded size="lg" color="success">
                      050-9382456
                      <MDBIcon icon="phone-square" className="ml-2" />
                    </MDBBtn>
                  </a>
                </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBHamburgerToggler
              onClick={this.toggleSingleCollapse("collapse2")}
              isOpen={false}
              id="hamburger2"
            />

        </MDBNavbar>
   {collapseID && overlay}
        
      </>
    );
  }
}

export default Layout;
