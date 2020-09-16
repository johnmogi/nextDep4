import Carousel from '../components/Carousel';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
} from "mdbreact";

import Head from 'next/head'


const WelcomePage = () => (
  <>
  <Head>
  <title>ריאקט, נקסט, עיצוב אתרים חכמים ומהירים - ג'ון מוגי - 0509382456</title>
  <link rel="icon" href="/favicon.ico" />
  <meta property="og:description"
      content="כל מה שרציתם בפיתוח פרונטאנד חכם ומדויק ולא העזתם לבקש... מתמחה באתרי וורדפרס ובעיצוב והגשה חכמה ומהירה"/>

  
 
</Head>

<MDBView src='https://images.unsplash.com/photo-1529699310859-b163e33e4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80'> 

{/* // <MDBView src='https://images.pexels.com/photos/1660753/pexels-photo-1660753.jpeg?cs=srgb&dl=pexels-schach-1660753.jpg&fm=jpg'> */}
          <MDBMask className='rgba-orange-light' />
             {/* <video
              className="video-intro"
              poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
              muted
              loop
              autoPlay
            >
              <source
                src="https://mdbootstrap.com/img/video/animation.mp4"
                type="video/mp4"
              />
            </video>  */}
         {/* </MDBMask>{" "}  */}
          <MDBContainer
            className="d-flex justify-content-center align-items-center px-md-3 px-sm-0"
            style={{ height: "100vh", width: "100%" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-5 font-weight-bold mb-0 pt-md-5">
שכלול האתר שלכם בהצלחה                  <br />
                 זו המשימה שלי....
                </h1>
                <hr className="hr-light my-4 w-75" />
                <h4 className="subtext-header mt-2 mb-4">
                  איפיון וחשיבה על יעדים ומהות
                </h4>
                <h4 className="subtext-header mt-2 mb-4">
חילוץ פרוייקטים ותחזוקה של נכסים באינטרנט                </h4>
                <h4 className="subtext-header mt-2 mb-4">
                  תכנון, עיצוב ובנייה - כלים שלובים.
                </h4>
                <MDBBtn outline rounded color="white">
                  בואו ונתחיל <MDBIcon icon="home" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
  </>
);

export default WelcomePage;
