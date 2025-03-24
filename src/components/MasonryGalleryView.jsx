import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const MasonryGalleryView = ({ images }) => {
  const [imageUrls, setImageUrls] = useState([]);

  // Generate object URLs for File objects only
  useEffect(() => {
    const urls = images.map((img) =>
      typeof img === "string" ? img : URL.createObjectURL(img)
    );
    setImageUrls(urls);

    // Cleanup object URLs when component unmounts
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [images]);

  // Responsive breakpoints for Masonry
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1100: 3, // 3 columns for medium screens
    768: 2, // 2 columns for tablets
    500: 1, // 1 column for mobile
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full gap-4"
        columnClassName="masonry-column"
      >
        {imageUrls.map((src, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Image ${index}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGalleryView;
