import React,{useState,useContext} from "react"
import CartItem from "../components/cartItem"
import {Context} from '../Context'

function Cart() {
    const {cartItems,emptyCart} = useContext(Context)
    const [buttonText,setButtonText] = useState('Place Order')
    const cost = 475 * cartItems.length
    const totalCost = cost.toLocaleString("en-US", {style: "currency", currency: "INR"})
    const cartItemElements = cartItems.map(item => 
            <CartItem key = {item.id} item = {item} />
        )

    function placeOrder() {
        if(cartItems.length > 0) {
            setButtonText('Ordering..')
            setTimeout(()=>{
                console.log('order placed')
                setButtonText('Place Order')
                emptyCart()
            },3000)
        }
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                <button onClick ={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart