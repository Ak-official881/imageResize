import React, { useState } from "react";
import UploadArea from "./components/UploadArea";
import MasonryGallery from "./components/MasonryGallery";
import ImageDrawer from "./components/ImageDrawer";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // This handles adding uploaded images
  const handleUpload = (file) => {
    if (!file) return;
    setImages((prevImages) => [...prevImages, file]);
  };

  // When user clicks Edit button on a photo
  const handleEditClick = (img) => {
    setSelectedImage(img);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {images.length === 0 ? (
        <UploadArea onUpload={handleUpload} />
      ) : (
        <MasonryGallery images={images} onEditClick={handleEditClick} />
      )}

      {isDrawerOpen && (
        <ImageDrawer image={selectedImage} onClose={handleCloseDrawer} />
      )}
    </div>
  );
};

export default App;
