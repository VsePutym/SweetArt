import {useState} from "react";


const useGalleryPhotos = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(false);
  return {galleryPhotos, setGalleryPhotos}
}

export default useGalleryPhotos;