import React,{useContext} from "react"
import {Context} from '../Context'
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    const displayPhotos = allPhotos.map((photo,i )=> 
            <Image key={photo.id} img={photo} className={getClass(i)}/>
        )

    return (
        <main className="photos">
            {displayPhotos}
        </main>
    )
}

export default Photos