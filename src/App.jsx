import Navi from './Components/Navi'
import { Route, Routes} from "react-router-dom"
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home'
import About from './Pages/About'
import Show from './Pages/Show'
import Sup from './Pages/Sup'
import TLTW from './Pages/TLTW'
import TYK from './Pages/TYK'
import TLM from './Pages/TLM'
import PM from './Pages/PM'
import THB from './Pages/THB'
import THHB from './Pages/THHB'
import FN from './Pages/FN'
import JD from './Pages/JD'
import NOAH from './Pages/NOAH'
import WOW from './Pages/wow'
import SD from './Pages/SD'

import Footer from './Components/Footer'

function App() {


  return (
    <>
    <header>
      <Navi />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Show" element={<Show />} />
        <Route path='/Sup' element={<Sup/>}/>
        <Route path='/TLTW' element={<TLTW/>}/>
        <Route path='/TYK' element={<TYK/>}/>
        <Route path='/TLM' element={<TLM/>}/>
        <Route path='/PM' element={<PM/>}/>
        <Route path='/THB' element={<THB/>}/>
        <Route path='/THHB' element={<THHB/>}/>
        <Route path='/FN' element={<FN/>}/>
        <Route path='/JD' element={<JD/>}/>
        <Route path='/NOAH' element={<NOAH/>}/>
        <Route path='/wow' element={<WOW/>}/>
        <Route path='/SD' element={<SD/>}/>
      </Routes>
    </header>
    <Footer />
    </>
  )
}

export default App
