import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/logout/Logout';

function App() {
  // const location = useLocation()
  // const hideHeaderPaths = ['/register', '/login']
  // const showHeader = !hideHeaderPaths.includes(location.pathname)
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
         {
        //  showHeader &&  
         <Header />}
          <Sidebar />

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
            {/* Register */}
            <Route path = "/login" element = {<Login />} />
            {/* Login */}
            <Route path = "/register" element = {<Register />} />
            {/* Logout */}
            <Route path = "/logout" element = {<Logout />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
