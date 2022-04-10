import './App.css';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopItem from './components/ShopItem';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
