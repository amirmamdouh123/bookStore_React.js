import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAuthors from "../../store/authors/Async/getAuthors";
import { Col, Row } from "react-bootstrap";
import Author from "../../components/Author/Author";
import "./authors.css"

function Authors (){

    const dispatch= useDispatch()
    const author=useSelector((state)=>state.author)
    const [search,setSearch] = useState("")
    useEffect(()=>{
        dispatch(getAuthors())
    },[dispatch])

    const filterAuthors=(authorsItems)=>{
        return authorsItems.filter(el=> 
el.name.toLowerCase().includes(search.toLowerCase()))
    }

    const AuthorsJSX= filterAuthors(author.items).map((el)=>{
        return <Col xs={4}> <Author {...el} /> </Col>
    })
    console.log(search);
    return (
        <div style={{ marginTop:'50px',marginLeft:"60px" ,display:"flex" ,flexDirection:"column" ,alignItems:"center",justifyContent:"center"}} >
            <h1>Authors</h1>
            <div className="authors-search-wrapper">
                <input type="search" 
                        value={search} 
                        onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
            <Row >
                {AuthorsJSX}
            </Row>
        </div>

    )
}
export default Authors;