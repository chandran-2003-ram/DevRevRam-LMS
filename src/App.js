import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
//pages
import Home from './pages/home';
import Login from './pages/user_login';
import Signup from './pages/user_signup';
import ViewBooks from './pages/ViewBooks';
import Borrow from './pages/borrow_books';
import SearchPage from './pages/search_page';
import ProtectedRoute from './pages/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ShoppingBasket from './components/Books/ShoppingBasket';
import Checkout from './components/Books/Checkout';
// import "./App.css";
import { UserAuthContextProvider } from "../src/pages/context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewbooks" element={<ViewBooks />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/borrowbooks" element={<Borrow />} />
          {/* <Route exact path='/borrowbooks' element={
          <React.Fragment>
            <Checkout/>
            <ShoppingBasket/>
          </React.Fragment>
        } /> */}
        </Routes>
      </Router>

    </div>
  </UserAuthContextProvider>
  );
}

export default App;
