import './App.css';
import Navibar from "./Navibar"
import Home from './Pages/Home';
import Info from './Pages/Info';
import Supps from './Pages/Supps'
import Sleep from './Pages/Sleep'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navibar />
    	<div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplements" element={<Supps />} />
          <Route path="/supplements/sleep" element={<Sleep />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </>
    )
}

export default App;
