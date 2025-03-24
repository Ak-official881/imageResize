import React, { useState } from 'react';
import BoxIllustration from '../assets/box-illustration.png'; // adjust path if needed

const UploadArea = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="w-64 h-64 flex items-center justify-center">
        <img
          src={BoxIllustration}
          alt="Box Illustration"
          className={`object-contain transition-all duration-300 ${
            isDragging ? 'opacity-50 scale-105' : ''
          }`}
        />
      </div>

      <p className="text-gray-500 text-lg">
        {isDragging ? 'Drop image here' : 'Add Assets here'}
      </p>

      <label className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition cursor-pointer">
        <span className="text-xl">+</span>
        Add
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default UploadArea;
