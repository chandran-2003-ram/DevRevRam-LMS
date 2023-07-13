import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import axios from 'axios';
import ViewSearchResults from './ViewSearchResults';
import { useNavigate } from 'react-router-dom';
import Avatar from "./logo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { actionType } from '../pages/context/reducer';
import { useStateValue } from '../pages/context/StateProvider';
import { motion } from 'framer-motion';
import Header from './Books/Header';

import {
  GlobalStyle,
  Navbar,
  NavLinks,
  NavLink,
  NavItem,
  SearchBox,
  RightContainer,
  BrandLogo,
  LoginLink
} from './Styles';

const NavbarHead = () => {
  
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  // const { myReducer } = useStateValue();
  // const [ data ] = myReducer;
  // const firebaseAuth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  // const [{ user,cartShow,cartItems }, dispatch] = useStateValue()

  // const [isMenu,setIsMenu] = useState(false);

  // const login = async () => {
  //   if (!user) {
  //     const {
  //       user: { refreshtoken, providerData }
  //     } = await signInWithPopup(firebaseAuth, provider);
  //     dispatch({
  //       type: actionType.SET_USER,
  //       user: providerData[0],
  //     });
  //     localStorage.setItem('user', JSON.stringify(providerData[0]));
  //   }
  //   else{
  //     setIsMenu(!isMenu);
  //   }
  // };

  // const logout = ()=>{
  //   setIsMenu(false);
  //   localStorage.clear();

  //   dispatch({
  //     type: actionType.SET_USER,
  //     user:null
  //   })
  // }
//  const showCart = () =>{
//   dispatch({
//     type: actionType.SET_CART_SHOW,
//     cartShow: !cartShow,
//   });
//  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {

      console.log(searchValue);
      // Make a request to the Google Books API
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchValue,
        },
      });
      
      // Handle the response data here
      console.log(response.data);
      setSearchResults(response.data);
      
      // Navigate to the SearchResults page with the search results
      navigate('/searchpage', { state: { searchResults: response.data } });

      // Reset the search term
      searchValue('');

    } catch (error) {
      // Handle any errors
      console.error(error);
    }


  };

  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <NavLinks>
        <NavItem>
            <NavLink href="/">LogOut</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/viewbooks">View Books</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/borrowbooks">Cart {data.cartItem.length}</NavLink>
          </NavItem> */}
         
        
        </NavLinks>
        <div className='Cart' style={{marginLeft:"400px"}}>
        <Header/>
        </div>
        <RightContainer>
        
        <form onSubmit={handleSearch}>
        
        <SearchBox
              type="text"
              placeholder="Search for Books"
              id="searchInput" // Add a unique id attribute
              name="search" // Add a unique name attribute
              value={searchValue}
              onChange={handleSearchChange}
            />

        </form>

        </RightContainer>
        <RightContainer style={{ marginLeft: '20px' }}>
          <BrandLogo src="logo.png" alt="Library Management System Logo" />
        </RightContainer>
      </Navbar>
      {searchResults && <ViewSearchResults searchResults={searchResults} />}

    </div>
  );
};

export default NavbarHead;
