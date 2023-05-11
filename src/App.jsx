import './App.css'
import Associates from './components/Associates'
import Businesses from './components/Businesses'
import CustomerReview from './components/CustomerReview'
import { DownloadApp } from './components/DownloadApp'
import Features from './components/Features'
import FindAgent from './components/FindAgent'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SecondFeatures from './components/SecondFeatures'

function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <SecondFeatures/>
     <Associates/>
     <FindAgent/>
     <CustomerReview/>
     <Businesses/>
     <DownloadApp/>
     <Footer/>
    </>
  )
}

export default App
