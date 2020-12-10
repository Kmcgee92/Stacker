import React, {useState} from "react";

 

// ImageList Component
const ImageList = ( photoArray ) => {
  const [photos, setPhotos] = useState([...photoArray])

  // render each image by calling Image component
  const renderImage = (image, index) => {
    return (
      <img
        src={image.url}
        key={index}
        alt={image.alt_description}
        // add className
      />
    );
  };

  // Return the list of files
  return <section className="file-list">{photos.map(renderImage)}</section>;
};


export default ImageList;