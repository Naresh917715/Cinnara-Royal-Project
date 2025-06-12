
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface YouTubePopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const YouTubePopup = ({ isVisible, onClose }: YouTubePopupProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      // Preload the iframe when popup becomes visible
      setIsLoaded(true);
    }
  }, [isVisible, isLoaded]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
          <h3 className="font-display text-base sm:text-xl font-bold text-deep-brown">
            Discover Ceylon Cinnamon
          </h3>
          <button
            onClick={onClose}
            className="text-deep-brown hover:text-warm-brown transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="aspect-video relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-warm-brown"></div>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uoxg5FjHJWk?autoplay=1&mute=1"
            title="Ceylon Cinnamon Documentary"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubePopup;
