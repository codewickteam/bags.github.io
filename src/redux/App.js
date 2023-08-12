import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FirstPage from './redux/FirstPage';
import CartItems from './redux/CartItems';
import CartPage from './redux/CartPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
          <FirstPage/>
          <CartItems/>
          <CartPage/>
      </Router>
    </div>
  );
}

export default App;
