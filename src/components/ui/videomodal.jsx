import React from "react";

export default function VideoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-full max-w-xl mx-4">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl z-10 bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Responsive Video */}
        <div className="w-full aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
          <video
            src="/demo.mp4"
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
