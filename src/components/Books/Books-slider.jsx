import { useContext, useEffect, useState } from "react";
import getBooks from "../../store/book/Async/getBooks";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import './bookCSS.css'
import BookSelected from "../bookSelect/bookSelected";
import BookStoreContext from "../../context/bookStorContext";
function Books({title}){
    
    const dispatch =useDispatch()
    const {selected,cartInfo} = useContext(BookStoreContext);
    const book =useSelector((state)=>state.book)
    const [indexSlider,setIndexSlider]=useState(0)

    function sildingHandler(direction){
        if(direction ==='left'){
            setIndexSlider(indexSlider-1)
        }
        else if(direction ==='right'){
            setIndexSlider(indexSlider+1)
        }
    }
    
    const bookJSx = book.items.map((el)=>{
        return (<Book element={el} />)
    })

    useEffect(()=>{
        dispatch(getBooks())
    },[])
    return (<>
        <div className="book-slider-container">

        <h1 style={{margin:'10px',marginLeft:'30px'}}>{title}</h1>
        
        
        <div className="book-slider-wrapper">



            {indexSlider!=0 && <i onClick={()=>{sildingHandler('left')}} className="bi bi-arrow-left arrow-left book-slider-arrow-left"></i>}

            <div style={{transform: `translateX(${indexSlider * -350}px)`}} className="book-slider-wrapper">
                
            {bookJSx}

            </div>
            </div>

            {indexSlider!=(book.items.length-4) && <i onClick={()=>{sildingHandler('right')}} className="bi bi-arrow-right arrow-right book-slider-arrow-right"></i>}


        </div>
        {selected &&<div> <BookSelected bookData={cartInfo} /> </div>}

        </>
    )
}

export  default Books;