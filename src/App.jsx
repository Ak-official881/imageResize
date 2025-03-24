import React, { useState } from "react";
import UploadArea from "./components/UploadArea";
import MasonryGallery from "./components/MasonryGallery";
import ImageDrawer from "./components/ImageDrawer";
import MasonryGalleryView from "./components/MasonryGalleryView";

const App = () => {
  const [images, setImages] = useState([]); // Stores uploaded images
  const [selectedImage, setSelectedImage] = useState(null); // Stores selected image for editing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Controls ImageDrawer visibility
  const [isFinalUpload, setIsFinalUpload] = useState(false); // Controls transition to GalleryView

  // Handle image upload
  const handleUpload = (file) => {
    if (!file) return;
    setImages((prevImages) => [...prevImages, file]);
  };

  // Handle edit button click
  const handleEditClick = (img) => {
    setSelectedImage(img);
    setIsDrawerOpen(true);
  };

  // Close the ImageDrawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedImage(null);
  };

  // Handle final upload (switch view)
  const handleFinalUpload = () => {
    console.log("Final Upload Triggered"); // Debugging log
    setIsFinalUpload(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isFinalUpload ? (
        <MasonryGalleryView images={images} />
      ) : images.length === 0 ? (
        <UploadArea onUpload={handleUpload} />
      ) : (
        <MasonryGallery
          images={images}
          onEditClick={handleEditClick}
          onFinalUpload={handleFinalUpload} // Pass Final Upload function
        />
      )}

      {isDrawerOpen && (
        <ImageDrawer
          image={selectedImage}
          onClose={handleCloseDrawer}
          onFinalUpload={handleFinalUpload} // Ensure Final Upload works from Drawer too
        />
      )}
    </div>
  );
};

export default App;
