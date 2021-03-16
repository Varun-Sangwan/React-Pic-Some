import React,{useState,useContext} from 'react'
import DeleteBinLineIcon from 'remixicon-react/DeleteBinLineIcon'
import DeleteBinFillIcon from 'remixicon-react/DeleteBinFillIcon'
import {Context} from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered , setHovered] = useState(false)

    const deleteIcon = (hovered ? 
                        <DeleteBinFillIcon onClick ={()=>removeFromCart(item.id)}/>
                    :   <DeleteBinLineIcon onClick ={()=>removeFromCart(item.id)}/>)

    return (
        <div className="cart-item">
            <div 
                onMouseEnter ={()=>setHovered(true)}
                onMouseLeave ={()=>setHovered(false)} 
            >
                {deleteIcon}
            </div>
            <img src={item.url} width="130px" />
            <p>₹475</p>
        </div>
    )
}
export default CartItem