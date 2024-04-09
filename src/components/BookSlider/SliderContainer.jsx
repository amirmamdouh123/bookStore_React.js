import './slider.css'
import book1 from '../../assets/imgs/book1.png'
import book2 from '../../assets/imgs/book2.png'
import book3 from '../../assets/imgs/book3.png'
import Slide from './Slide'
import { useState } from 'react'

function SliderContainer(){

    const [index,setIndex] =useState(0)

    function sildingLeftHandler(){
        setIndex((index-1))
    }
    function sildingRightHandler(){
        setIndex((index+1))
    }

    return (<>

        <div className="sliderContainer">
            {index !=0  && <i onClick={sildingLeftHandler} className="bi bi-arrow-left arrow-left"></i>}

            <div style={{    transform:  `translateX(${Number(index) * -100}vw )`}}  className="sliderWapper">

                <Slide 
                    title={"Book Store"}
                    description={"It's not just reading. It's living the Adventure"}
                    img={book1}   
                    backgroudColor={'firstSlide'}/>
               
                <Slide 
                    title={"Books for Every One"}
                    description={"It's not just reading. It's living the Adventure"}
                    img={book2}  
                    backgroudColor={'secondSlide'} />
                <Slide 
                    title={"Check out the new Titles"}
                    description={"We send you the book you need at home"}
                    img={book3} 
                    backgroudColor={'thirdSlide'}  />
            </div>
            

           {index !==2 && <i onClick={sildingRightHandler} className="bi bi-arrow-right arrow-right"></i>}
        </div>
        </>
    )
}

export default SliderContainer;