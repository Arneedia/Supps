import './App.css';
import Navibar from "./Navibar"
import Home from './Pages/Home';
import Impressum from './Pages/Impressum';
import Supps from './Pages/Supps'
import Sleep from './Pages/Sleep'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplements" element={<Supps />} />
          <Route path="/supplements/sleep" element={<Sleep />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
    </>
    )
}

export default App;
