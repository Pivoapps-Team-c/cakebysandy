
import React, { useEffect, useState } from 'react';
import AdmiSubHeader from '../../components/subheader/admi-subheader.components';
import { DialogDefault } from './test-comps.components';
import { FaFilter } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { useOrder } from '../../hooks/useAuth';
   
const GalleryItems = ({sendImage}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cat, setCat] = useState('')
  const [ Gallery, setGallery ] = useState()
  const { gallery } = useOrder();

  const handleImgSend = (imageLink) => {
    setSelectedImage(imageLink);
    setIsModalOpen(true); // Open modal on image click
    console.log(imageLink)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Clear selected image when modal is closed
  };

  
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];
  

  const handleCatChange = (event) => {
    const selectedCat = event.target.value;
    setCat(selectedCat);
  
    if (selectedCat === "0") {
      // Reset to show all items if "Filter by Category" is selected
      setGallery(gallery);
    } else {
      const newGallery = gallery.filter(item => item.cat === selectedCat);
      setGallery(newGallery);
      // console.log("Gal: ", newGallery)
    }
    // console.log(selectedCat)
  };

  useEffect(() => {
    // Ensure Gallery is set to the full list on the initial render
    setGallery(gallery);
  }, [gallery]);

  return (
    <>
      <div className="gallery-filter">
          <FiFilter size={16} className='my-2' />
          <select className="" variant="outlined" onChange={handleCatChange} name="gallery_cat" size="lg">
            <option value={0}>Filter by Category</option>
            <option value="Cupcake">Cupcake</option>
            <option value="Birthday Cake">Birthday Cake</option>
            <option value="Anniversary Cake">Anniversary Cake</option>
            <option value="Celebration Cake">Celebration Cake</option>
            <option value="Wedding Cake">Wedding Cake</option>
            <option value="Pastries">Pastries</option>
            <option value="Custom">Custom</option>
          </select>
      </div>
      { Gallery ? 
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {Gallery.map(({ urls }, galleryIndex) => (
        urls.map((url, urlIndex) => (
          <div key={`${galleryIndex}-${urlIndex}`}>
            <img 
              onClick={() => handleImgSend(url)}
              className="h-80 w-full max-w-full rounded-lg object-cover object-center"
              src={url}
              alt="gallery-photo"
            />
          </div>
        ))
      ))}
    </div>
      :null
      }

      {/* Pass down the modal visibility and image data to ImageModal */}
      {isModalOpen && <DialogDefault imageLink={selectedImage} closeModal={closeModal} />}
    </>
  );
};

export default GalleryItems;
