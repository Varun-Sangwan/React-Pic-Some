import React,{useState , useContext, useEffect} from "react"
import {Context} from '../Context'
import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import HeartFillIcon from 'remixicon-react/HeartFillIcon'
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon'
import AddCircleFillIcon from 'remixicon-react/AddCircleFillIcon'
import PropTypes from 'prop-types'

function Image({className,img}) {
    const [hovered,setHovered] = useState(false)
    const {cartItems,toggleFavorite,addToCart,removeFromCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite){
            return <HeartFillIcon className="favorite" onClick = {()=>toggleFavorite(img.id)}/>
        } else {
            return (hovered && <HeartLineIcon className="favorite" onClick = {()=>toggleFavorite(img.id)}/>)
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <AddCircleFillIcon className="cart" onClick={() => removeFromCart(img.id)}/>
        } else if(hovered) {
            return <AddCircleLineIcon className="cart" onClick={() => addToCart(img)}/>
        }
    }

    return (
        <div 
            className={`${className} image-container` } 
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image