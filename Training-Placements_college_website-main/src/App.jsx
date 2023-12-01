
import './App.css'

import Coursoul from './components/Coursoul'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Main3 from './components/Main3'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PastRecruiters from './components/PastRecruiters'
import Placement from './components/Placement'
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          <>

            <Coursoul />
            <Marquee />
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

<Route exact path='/campus' element={
          <>
            
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

<Route exact path='/placement' element={
          <>

<Placement/>
         
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

<Route exact path='/achivement' element={
          <>

            
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

<Route exact path='/recruitment' element={
          <>

          
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

       
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
