import React, { useContext, useState } from 'react'
import './Navbar.css'
// import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCardItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="navlogo">
            {/* <img src={logo} alt="navlogo"/> */}
            <p>MyShop</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            
            <Link to='/cart'><img src={cart_icon} alt="Cart-icon" /></Link>
           
            <div className="nav-cart-count">{getTotalCardItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
