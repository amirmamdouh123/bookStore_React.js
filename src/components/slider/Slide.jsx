import React from 'react'
import './slider.css'

function Slide({title,description, img ,backgroudColor}){

    return (<div className= {` slide ${backgroudColor}`} >

    <div className="slideImgWrapper">
        <img src={img} alt="" />
    </div>
    
    <div className="slideInfoWarpper">

        <h1 className="sliderTitle">
            {title}
        </h1>
        
        <p className="sliderParagraph">
            {description} 
        </p>

    </div>
    </div>
    )
}

export default Slide;

