import './Cart.css'
import {addToCart ,removeFromCart} from "../../store/cart/cartSlice"
import {useDispatch ,useSelector} from "react-redux"
import React from 'react';
function Cart({item}){
  console.log(item);
    console.log("oneCart run");
    const dispatch =useDispatch()
    function addToCartHandler(id,qty){
        dispatch(addToCart({id,qty}))
    }

    function removeFromCartHandler(id){
        dispatch(removeFromCart(id))
    }

    return (
        <div key={item.id} className="cart-item">
              <img
                src={`${process.env.PUBLIC_URL}/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => addToCartHandler(item.id, parseInt(item.qty) + 1)}
                      className="bi bi-plus-lg"
                    ></button>
                    <b>{item.qty}</b>
                    <button
                      disabled={item.qty <= 1}
                      onClick={() => addToCartHandler(item.id, parseInt(item.qty) - 1)}
                      className="bi bi-dash-lg"
                    ></button>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <i
                    onClick={() => removeFromCartHandler(item.id)}
                    className="bi bi-trash-fill"
                  ></i>
                </div>
              </div>
            </div>
    )
}

export default React.memo(Cart);