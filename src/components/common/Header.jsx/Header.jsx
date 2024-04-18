import styles from './Header.module.css'
import { BiBook  } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link ,useNavigate } from 'react-router-dom';


const {ContainerCSS,topHeader,topHeaderTelephone ,topHeaderWelcome,topHeaderLogin} = styles
const {middleHeader,bookStoreSVG,headerSearch,cartCSS ,contItems} = styles
const {buttomHeader,navBar,menulist} = styles

function Header(){
    const navigate =useNavigate()
    const cart =useSelector((state)=>state.cart)

    function getTotalCount(){
        return Object.values(cart.items)?.reduce((accumlate,current)=>{
            return accumlate+ Number(current);
        },0)
    }

    const countItemCart = getTotalCount();
    function navigateToCart(){
        navigate("/cart")
    }


    return (<header>
        <div className={ContainerCSS}>
        <div className={topHeader}>

            <div className={topHeaderTelephone}> {/*1*/}
                <i className="bi bi-telephone">123-467-789</i>
                
            </div>
            <div className={topHeaderWelcome}>{/*2*/}
                Welcome to online Book Store
            </div>

            <div className={topHeaderLogin}>{/*3*/}
                <i className="bi bi-person">Login</i>
                
            </div>
        </div>


        <div className={middleHeader}>

            <div className={bookStoreSVG}> {/*1*/}
                    Book
                    <i className="bi bi-book"/>
                    Store
            </div>

            <div className={headerSearch}>{/*2*/}
                <input  type="search" placeholder='Search in book store...' />
            </div>

            <div className={cartCSS} onClick={()=>{navigateToCart()}}>{/*3*/}
                {countItemCart && <p className={contItems}  >{Number(countItemCart)}</p>}
                <i className="bi bi-cart-dash"></i>
            </div>

        </div>



        <div className={buttomHeader}>

            {/* <i className={#menulist  ` bi bi-list`}></i> */}

            <div className={navBar}>
                <Link  to={'/'}>Home</Link>
                <Link  to={'/authors'}>Authors</Link>
                <Link  to={'/aboutUs'}>About us</Link>
                <Link  to={'/contactus'}>Contact us</Link>
                <Link  to={'/register'}>Register</Link>
            </div>


        </div>


        </div>
    </header>)
}

export default Header