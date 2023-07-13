import './Checkout.css';
import { useStateValue } from './StateProvider';

const Checkout = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;

  const getTotalAmount = () => {
    let total = 0;
    data.cartList.map(item =>{
      return total = Number(total) + Number(item.price);
    })
    return total;
  }

  const getTotalItem = () => {
    return data.cartList.length
  }

  return(
    <div className="checkoutAd">
      <div className="rightSide">
        <div className="subtotal">
          <p>Subtotal({getTotalItem()} items): <strong>${getTotalAmount()}</strong></p>
          <p><input type="checkbox"/>Special Packaging</p>
          <button style={{color:"white"}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;