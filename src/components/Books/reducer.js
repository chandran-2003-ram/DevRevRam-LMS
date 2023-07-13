export  var initialState = {

  cartList:[],
  productList:[{
    title: 'Age of Vice Book',
    price: '1.02',
    rating: '4',
    quantity: '5',
    imageURL: 'http://prodimage.images-bn.com/pimages/9780593544549_p0_v3_s1200x630.jpg',
 

  },
  {
    title: 'A Death at the Party Book',
    price: '2.03',
    rating: '3',
    quantity: '5',
    imageURL: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668009109/a-death-at-the-party-9781668009109_lg.jpg',
  },
  {
    title: 'The Banyan Moon Book',
    price: '3.04',
    rating: '2',
    quantity: '5',
    imageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675641427i/62800971._UY630_SR1200,630_.jpg',
  },
  {
    title: 'WINGS OF FIRE',
    price: '4.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://www.newszii.com/wp-content/uploads/2018/07/Wings-of-Fire-An-Autobiography-of-APJ-Abdul-Kalam2.jpg',
  },
  {
    title: 'Dust Child Book',
    price: '5.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://shereads.com/wp-content/uploads/2022/11/Dust-Child-768x1159.jpg',
  },
  {
    title: 'The Wishing Game',
    price: '6.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://checkreads.com/wp-content/uploads/2023/01/The-Wishing-Game.jpg',
  },
  {
    title: 'Same-Time-Next-Summer',
    price: '7.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://target.scene7.com/is/image/Target/GUEST_dd494d18-603e-4701-9419-912ac3bb475d?wid=488&hei=488&fmt=pjpeg',
  },
  {
    title: 'Homecoming Book',
    price: '8.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://imgv2-2-f.scribdassets.com/img/word_document/224261807/original/36699ca4a0/1583284519?v=1',
  },
  {
    title: 'Symphony of Secrets',
    price: '9.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://barbarah.wordpress.com/files/2008/02/symphony-of-secrets.jpg',
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
