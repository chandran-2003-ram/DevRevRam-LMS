
import book1 from "../images/apj.jpg";
import book2 from "../images/city-under-one-roof-book.png";
import book3 from "../images/the-world-and-all-that-it-holds-book.png";
import book4 from "../images/maame-book.png";
import book5 from "../images/essex-dogs-book.png";
import book6 from "../images/what-happened-to-ruthy-ramirez-book.png";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/paper-names-book.png";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book18 from "../images/yellowface-book.png";
import book19 from "../images/the-second-ending-book.png";
import book20 from "../images/the-wishing-game-book.png";
import book21 from "../images/same-time-next-summer-book.png";
import book22 from "../images/banyan-moon-book.png";
import book23 from "../images/crook-manifesto-book.png";
import book24 from "../images/everyone-here-is-lying-book.png";
import book25 from "../images/gone-tonight-book.png";


export  var initialState = {

  cartList:[],
  productList:[{
    title: 'Age of Vice Book',
    price: '1.02',
    rating: '4',
    quantity: '5',
    image: book3,
 

  },
  {
    title: 'A Death at the Party Book',
    price: '2.03',
    rating: '3',
    quantity: '5',
    image: book7,
  },
  {
    title: 'The Banyan Moon Book',
    price: '3.04',
    rating: '2',
    quantity: '5',
    image: ,
  },
  {
    title: 'WINGS OF FIRE',
    price: '4.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://www.newszii.com/wp-content/uploads/2017/postimg/abdul-kalam-hd-images06450742.jpg',
  },
  {
    title: 'Dust Child Book',
    price: '5.00',
    rating: '4',
    quantity: '5',
    image: 'src/images/dust-child-book.png',
  },
  {
    title: 'The Wishing Game',
    price: '6.00',
    rating: '4',
    quantity: '5',
    image: 'src/images/the-wishing-game-book.png',
  },
  {
    title: 'Same-Time-Next-Summer',
    price: '7.00',
    rating: '4',
    quantity: '5',
    image: 'src/images/same-time-next-summer-book.png',
  },
  {
    title: 'Homecoming Book',
    price: '8.00',
    rating: '4',
    quantity: '5',
    image: 'src/images/homecoming-book.png',
  },
  {
    title: 'Gone Tonight Book',
    price: '9.00',
    rating: '4',
    quantity: '5',
    image: book25,
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
