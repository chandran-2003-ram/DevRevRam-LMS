import './shoppingBasket.css';
import { useStateValue } from './StateProvider';
import Rating from './Rating';
import { initialState } from './reducer';
const ShoppingBasket = () => {
  const { myReducer } = useStateValue();
  const [ data, dispatch ] = myReducer;

  const removeFromCart = (id) => {
    initialState.productList.forEach(ele => {
    
      if(ele.title===id.title){
      //  data.cartList.filter((ele) => ele.id !== id.id);
       ele['quantity']= ele.quantity+1;
       id['quantity']+=1;
       // selectedValue.quantity--;
     }
     
   });

    dispatch({
      type:'REMOVE_FROM_CART',
      payload:id.id
    })
    console.log(id);
  }
  
  return(
    <div className="shoppingBasket">
      <hr/>
      <ul className='list'>
        {
          data.cartList.map(item=>(<li key={item.id}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>${item.price}</strong></p>
              <div><Rating rate={item.rating}/></div>
              <button onClick={()=>removeFromCart(item) }style={{color:"white"}}>Remove from Cart</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ShoppingBasket;