import React,{useContext} from "react"
import { Link} from "react-router-dom"
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon'
import ShoppingCart2FillIcon from 'remixicon-react/ShoppingCart2FillIcon'
import {Context} from '../Context'

function Header() {
    const {cartItems} = useContext(Context)
    
    const cartIcon = (cartItems.length > 0 ) ?
    <Link to='/cart'><ShoppingCart2FillIcon /></Link> :
    <Link to='/cart'><ShoppingCart2LineIcon /></Link>
    return (
        <header>
            <h2><Link to='/'>Pic Some</Link></h2>
            {cartIcon}
        </header>
    )
}

export default Header