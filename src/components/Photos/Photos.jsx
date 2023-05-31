import { useEffect, useState } from 'react'
import Photo from '../Photo/Photo'

const Photos = () => {

    const[photos, setPhotos] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resp=>resp.json())
        .then(response => {
            setPhotos(response);
        })
        .catch((error) => console.error(error));
    },[])

    console.log(photos)

  return (
    <div>
        {photos.length > 1 && <Photo photo={photos[1].thumbnailUrl} title={photos[1].title}/>}
    </div>
  )
}

export default Photos