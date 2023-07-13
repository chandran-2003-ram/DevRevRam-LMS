import React, { useRef, useEffect } from 'react';
import ProductList from "./Books/ProuductList";
import { Title } from './Styles';
const BookCards = () => {
    return (
      <div>
        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>Top Trending Books of 2023</Title>
        <ProductList/>
        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>Best Selling Books of 2023</Title>
        <ProductList/>
        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>All Time Favourites</Title>
        <ProductList/>

      </div>
    );
  };
  
  export default BookCards;