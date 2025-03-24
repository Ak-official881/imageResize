import React from "react";
import { motion } from "framer-motion";
import { Crop, RotateCcw, FlipHorizontal, FlipVertical, Upload } from "lucide-react";

const ImageDrawer = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-80 h-full bg-white/30 backdrop-blur-lg border-l border-white/10 shadow-2xl p-6 z-50 flex flex-col rounded-l-3xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-3">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">Edit Tools</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 text-2xl font-bold transition-all duration-300"
        >
          ✕
        </button>
      </div>

      {/* Action Buttons Only */}
      <div className="flex-1 flex flex-col justify-center space-y-4">
        {/* Button Example */}
        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg">
          <Crop className="w-5 h-5" />
          <span>Crop</span>
        </button>

        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg">
          <RotateCcw className="w-5 h-5" />
          <span>Rotate</span>
        </button>

        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg">
          <FlipHorizontal className="w-5 h-5" />
          <span>Flip Horizontal</span>
        </button>

        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg">
          <FlipVertical className="w-5 h-5" />
          <span>Flip Vertical</span>
        </button>

        <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 shadow-lg">
          <Upload className="w-5 h-5" />
          <span>Replace</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ImageDrawer;
