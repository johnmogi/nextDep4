import Carousel from '../components/Carousel';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBCardBody
} from "mdbreact";

import Head from 'next/head'


const PortFolio = () => (
  <>
  <Head>
  <title>ריאקט, נקסט, עיצוב אתרים חכמים ומהירים - ג'ון מוגי - 0509382456</title>
  <link rel="icon" href="/favicon.ico" />
  <meta property="og:description"
      content="כל מה שרציתם בפיתוח פרונטאנד חכם ומדויק ולא העזתם לבקש... מתמחה באתרי וורדפרס ובעיצוב והגשה חכמה ומהירה"/>

  
 
</Head>
<MDBView src='https://images.pexels.com/photos/1660753/pexels-photo-1660753.jpeg?cs=srgb&dl=pexels-schach-1660753.jpg&fm=jpg'>
       <MDBMask className='rgba-pink-light' />
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
     
      <MDBContainer className='white'>
         <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Our best projects
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        est laborum.
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the news</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the news</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView >
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the news</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
      </MDBContainer>
       
        </MDBView>
  </>
);

export default PortFolio;
