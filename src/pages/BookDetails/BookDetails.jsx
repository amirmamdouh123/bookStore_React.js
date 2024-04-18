import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Books/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import "./book.css"

function BookDetails(){

  const dispatch =useDispatch()

    const {id}=useParams()
    const [book,setBook]=useState("")

    const cart= useSelector((state)=>state.cart)
    const [qty,setQty] = useState(cart.items[id]);

    const fetchData= async()  => {
      const response = await axios.get(`http://localhost:9090/books/${id}`)
      const data = response.data
      setBook(data);
     }

    useEffect(()=>{
        try{
       fetchData()
       if(qty==0){
       setQty(cart.items[book.id])
       }
      }catch(error ){
        console.log("eroror"+error.message);
      }

    },[id])

    const handleAddToChart=()=>{
      const addtoCartObj ={id,qty:qty}
      dispatch(addToCart(addtoCartObj))
    }

    return (
        <div className="book">
        <div className="book-content">
          <img 
            src={`${process.env.PUBLIC_URL}/${book.image}`}
            alt={book.title}
            className="book-content-img"
          />
          <div className="book-content-info">
            <h1 className="book-title">{book.title}</h1>
            <div className="book-author">
              by <span>{book.author}</span> (Author)
            </div>
            <Rating rating={book.rating} reviews={book.reviews} />
            <div className="book-add-to-cart">
              <input
                className="book-add-to-cart-input"
                type="number"
                min="1"
                max="100"
                value={qty}
                onChange={e => setQty(e.target.value)}
              />
              <button onClick={() =>{handleAddToChart()} } className="book-add-to-cart-btn">
                <i className="bi bi-cart-plus"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <p className="book-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          molestiae corporis facere minima consequuntur, blanditiis voluptatem
          praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
          nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
          consequatur doloribus laborum adipisci quo voluptates dolorum cumque
          tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Laudantium fugit illo porro
          perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
          voluptate eveniet libero debitis consequuntur nostrum reiciendis
          officiis delectus rem.
        </p>
  
        <div className="book-icons">
          <div className="book-icon">
            <small>Print Length</small>
            <i className="bi bi-file-earmark-break"></i>
            <b>{book.printLength}pages</b>
          </div>
          <div className="book-icon">
            <small>Language</small>
            <i className="bi bi-globe"></i>
            <b>{book.language}</b>
          </div>
          <div className="book-icon">
            <small>Publication date</small>
            <i className="bi bi-calendar3"></i>
            <b>{book.PublicationDate}</b>
          </div>
        </div>
      </div>
    )
}

export default BookDetails;


