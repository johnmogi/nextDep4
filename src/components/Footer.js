import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { MDBBtn } from "mdbreact";

import Link from "next/link";

const FooterPagePro = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">צרו קשר עוד היום ונצא לדרך...</h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a
                href="tel:0509382456"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MDBBtn rounded size="lg" color="success">
                  050-9382456
                  <MDBIcon icon="phone-square" className="ml-2" />
                </MDBBtn>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>תכנות</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>תחזוקת אתרי אינטרנט</p>
            <p>אתרי סחר</p>
            <p>וורדפרס, react, Angular</p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>{/* <MDBLink href="#">MDBootstrap</MDBLink> */}</p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>{/* <MDBLink href="#">Your Account</MDBLink> */}</p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>צרו קשר</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> פרדס חנה
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@kodo.press
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 050-9382456
            </p>

           
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          כל הזכויות שמורות ג'ון מוגי &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
