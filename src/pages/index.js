import Carousel from '../components/Carousel';
import ReactImage from '../assets/mdb-react-small.png';


import Head from 'next/head'


const WelcomePage = () => (
  <>
  <Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
    <h1 className='text-center mt-5'>Welcome to Next.js</h1>
    <img
      src={ReactImage}
      alt='MDBReact'
      className='img-fluid d-block mx-auto mt-3'
    />
    <Carousel />
  </>
);

export default WelcomePage;
