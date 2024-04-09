import { useEffect } from "react";
import getCarts from "../../store/cart/Async/getCarts"

import {useDispatch,useSelector} from "react-redux"
import {Col} from "react-bootstrap"
import Cart from "../../components/Cart/Cart"
import { clearCart } from "../../store/cart/cartSlice";
import "./cart.css"



function Carts(){
    console.log("carts page run");
    const dispatch =useDispatch()
    const cart = useSelector((state)=>state.cart);
    const lenCart= Object.keys(cart.items).length
    useEffect(()=>{

        dispatch(getCarts())

        return ()=>{
            dispatch(clearCart())
        }

    },[dispatch,cart.items])

    const cartsJSX= cart.booksFullInfo.map((el)=>{
        const qty = cart.items[el.id];
        return <Col xs={3} key={el.id}>
            <Cart item={{...el ,qty }} />
        </Col>
    })

    const getQuantity=(id)=>{
        return cart.items[id];
    }
    
    return (    
    <div className="cart">
    <h1 className="cart-title">Your Shopping Cart</h1>
    <div className="cart-wrapper">
      <div className="cart-items">
        {lenCart ? cartsJSX : <p style={{height:"50vh" ,width:"50vw", textAlign:'center' }}>Cart is Empty</p>}
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              $
              {cart.booksFullInfo.reduce((acc, cur) => acc + cur.price * getQuantity(cur.id), 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cart.booksFullInfo.reduce((acc, cur) => acc + cur.price * getQuantity(cur.id), 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Carts;