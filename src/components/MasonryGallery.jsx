import React, { useState } from "react";
import { Pencil, Download } from "lucide-react";

const MasonryGallery = ({ images, onEditClick }) => {
  const [editedImages, setEditedImages] = useState([]);

  const handleEditClick = (img, index) => {
    onEditClick(img);
    setEditedImages((prev) => [...prev, index]);
  };

  const handleDownloadClick = (img) => {
    const url = URL.createObjectURL(img);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edited-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {images.map((img, index) => {
          const isEdited = editedImages.includes(index);

          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center bg-white rounded-3xl shadow-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{
                width: "400px",
                height: "80vh",
              }}
            >
              {/* Image Center Section */}
              <div className="flex-grow flex justify-center items-center w-full overflow-hidden mb-6">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Uploaded ${index}`}
                  className="object-contain h-full max-h-[500px] w-auto rounded-xl shadow-md"
                />
              </div>

              {/* Button Section */}
              <div className="w-full flex justify-center">
                {!isEdited ? (
                  <button
                    onClick={() => handleEditClick(img, index)}
                    className="flex items-center justify-center gap-2 w-3/4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <Pencil className="w-5 h-5" />
                    <span>Edit Image</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleDownloadClick(img)}
                    className="flex items-center justify-center gap-2 w-3/4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasonryGallery;
