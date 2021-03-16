import React,{useState , useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props){
    const [allPhotos , setAllPhotos] = useState([])
    const [cartItems,setCartItems] = useState([])
    const imgUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    
    useEffect(()=>{
        fetch(imgUrl)
            .then(response=>response.json())
            .then(data=>setAllPhotos(data))
    },[])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id===id){
                return {...photo, isFavorite:!photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
            setCartItems(prevItems => [...prevItems,newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems=>prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return(
        <Context.Provider value={{allPhotos,toggleFavorite,cartItems,addToCart,removeFromCart,emptyCart}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider , Context}