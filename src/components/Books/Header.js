import React from "react"
import './header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  
  return(
    <header className="header">
        <div className="header__nav__itemBasket">
          <Link to="/borrowbooks">
            <ShoppingCartIcon fontSize="small"/>&nbsp;{data.cartList?.length}&nbsp;
          </Link>
        </div>
    </header>
  )
}

export default Header;