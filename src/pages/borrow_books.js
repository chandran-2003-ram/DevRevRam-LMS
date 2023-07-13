import React from 'react';
import {
    GlobalStyle, HeadTitle
  } from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import ShoppingBasket from '../components/Books/ShoppingBasket';
import Checkout from '../components/Books/Checkout';

const Borrow = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            <HeadTitle  style={{ marginTop: '130px' }}>Your Cart</HeadTitle>
            <ShoppingBasket/>
            <div style={{marginLeft:"1500px"}}>
            <Checkout/>
            </div>
        </div>
    );
};

export default Borrow;