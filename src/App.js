import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Item from './Pages/Item/Item';
import Cart from './Components/Cart/Cart';
import Carty from './redux/Carty';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin.js';
import AllProductPage from './Pages/AllProduct/AllProductPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
return (
<div>
<Router>
    <Navbar/>
    <ScrollToTop/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/item/:id' element={<Item/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/carty' element={<Carty/>}/>
<Route path='/allproductpage' element={<AllProductPage/>}/>
<Route path='/admin' element={<Admin/>}/>
</Routes>
<Footer/>
</Router>
</div>
);
}

export default App;