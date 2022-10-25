import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './pages/Home/Footer/Footer';
import Food from './pages/Category/Food';
import Drink from './pages/Category/Drink';
import Menu from './pages/Home/Menu';
// import Contact from './pages/Contact';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/Menu" children={() => <Menu />} />
          <Route path="/Food" children={() => <Food />} />
          <Route path="/Drink" children={() => <Drink />} />
        </Routes>
          {/* <Route path="/contact" children={() => <Contact />} /> */}
        <Menu/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;