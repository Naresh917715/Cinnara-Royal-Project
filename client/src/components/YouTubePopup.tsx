
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface YouTubePopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const YouTubePopup = ({ isVisible, onClose }: YouTubePopupProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-display text-xl font-bold text-deep-brown">
            Discover Ceylon Cinnamon
          </h3>
          <button
            onClick={onClose}
            className="text-deep-brown hover:text-warm-brown transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Ceylon Cinnamon Documentary"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubePopup;
