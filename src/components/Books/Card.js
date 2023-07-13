import { useStateValue } from './StateProvider';
import Rating from './Rating';
import { initialState } from './reducer';
const Card = (props) => {
  const { title, price, rating, imageURL, quantity } = props;
  const { myReducer } = useStateValue();
  const [ , dispatch] = myReducer;
  const addToCard = (selectedValue) => {
    // if(selectedValue.quantity==='0'){
    //   console.log('out of stock');
    //   return;
    // }
    let timeStamp =  new Date().getTime();
    initialState.productList.forEach(ele => {
    
       if(ele.title===selectedValue.title && ele.quantity!='0'){
        ele['quantity']= ele.quantity-1;
        // selectedValue.quantity--;
      }
      else if(ele.title===selectedValue.title){
        console.log('out of stock');
        alert('out of stock');
      }
      
    });

    selectedValue = {...selectedValue, id:timeStamp};

    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue,   
      
    });

    // console.log(selectedValue.quantity);
  }
  return(
    <div className='card'>
      <p className='title' style={{fontFamily:"Times-New-Roman", fontSize:"20px"}}>{ title }</p>
      <p className='price' style={{fontFamily:"Times-New-Roman", fontSize:"20px"}}>${ price }</p>
      <p className='quantity' style={{fontFamily:"Times-New-Roman", fontSize:"20px"}}>Available quantity-{quantity}</p>
      <p className='starRating' style={{fontFamily:"Times-New-Roman", fontSize:"20px"}}>Ratings-{ <Rating rate={rating} /> }</p>
      <div className='imageHolder'>
        <img src={imageURL} alt=''/>
        <br/>
        <br/>
        <button onClick={()=>addToCard(props)} style={{color:"white"}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card;