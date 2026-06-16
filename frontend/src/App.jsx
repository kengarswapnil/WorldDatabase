import './App.css'
import City from './pages/City'
import Country from './pages/Country'
import Dashboard from './pages/Dashboard'
import Econmoy from './pages/Econmoy'
import Languages from './pages/Languages'
import LifeExpectancy from './pages/LifeExpectancy'
import Population from './pages/Population'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/countries' element={<Country />}></Route>
            <Route path='/city' element={<City />}></Route>
            <Route path="/economy" element={<Econmoy />}></Route>
            <Route path="/population" element={<Population />} />
            <Route path='/LifeExpectancy' element={<LifeExpectancy />}></Route>
            <Route path='/language' element={<Languages />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
