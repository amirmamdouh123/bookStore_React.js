import Rating from './Rating'
import './bookCSS.css'
import { useState } from 'react';
import BookSelected from '../bookSelect/bookSelected'
import bookStoreContext from '../../context/bookStorContext'
import { useContext } from 'react';

function Book({element,qty}){

  const {setSelected,setCartInfo} = useContext(bookStoreContext);
  
  function handleSelectBook(){
    setSelected(true);
    setCartInfo({...element ,qty});
  } 
  
  return (
  <div key={element.id} className="book-slide-item" onClick={()=>{handleSelectBook()}}>
    <div className="image">
      <img src='books/atomic-habits.jpg' className="book-slide-item-img" />
    </div>
    <h3 className="book-slide-item-title">{element.title}</h3>
    <Rating rating={element.rating} reviews={element.reviews} />
    <div className="book-slider-item-price">${element.price}</div>
    <div className="book-slider-icons-wrapper">
      <i  className="bi bi-cart-plus"></i>  {/*onClick={() => addToCart(item, 1)}*/}
    </div>
  </div>   
    )
}

export default Book;