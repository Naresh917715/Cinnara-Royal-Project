import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Ceylon Cinnamon Plantation at Sunrise",
      title: "Our Plantation",
      description: "Where quality begins",
      category: "plantation"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Traditional Cinnamon Harvesting",
      title: "Harvesting",
      description: "Traditional methods",
      category: "process"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Cinnamon Bark Peeling Process",
      title: "Processing",
      description: "Skilled artisans",
      category: "process"
    },
    {
      src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Cinnamon Quills Drying Process",
      title: "Drying",
      description: "Natural sun drying",
      category: "process"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Quality Control Process",
      title: "Quality Control",
      description: "Ensuring perfection",
      category: "factory"
    },
    {
      src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern Packaging Facility",
      title: "Packaging Facility",
      description: "Modern standards, traditional quality",
      category: "factory"
    },
    {
      src: "https://images.unsplash.com/photo-1556198078-7d1b8d01f8bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Cinnamon Trees in Plantation",
      title: "Cinnamon Trees",
      description: "Growing in natural habitat",
      category: "plantation"
    },
    {
      src: "https://images.unsplash.com/photo-1574156680652-7d7b98cd2d9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Workers in Cinnamon Field",
      title: "Harvesting Team",
      description: "Experienced harvesters",
      category: "plantation"
    },
    {
      src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Final Cinnamon Products",
      title: "Premium Products",
      description: "Ready for export",
      category: "factory"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-heading">
              Our Journey in Pictures
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              From our lush plantations to our state-of-the-art processing facility, witness the journey of 
              Ceylon cinnamon from tree to table.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                } ${index === 5 ? 'md:col-span-2' : ''}`}
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-80 lg:h-96' : index === 5 ? 'h-64' : 'h-80'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-display text-xl font-bold">{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-deep-brown mb-8">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-warm-cream p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-deep-brown mb-3">Plantation</h3>
                <p className="text-deep-brown/70">
                  Our cinnamon trees grow in the rich soil of Sri Lanka, nurtured by traditional farming methods 
                  passed down through generations.
                </p>
              </div>
              <div className="bg-soft-cream p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-deep-brown mb-3">Processing</h3>
                <p className="text-deep-brown/70">
                  Skilled artisans carefully harvest and process the cinnamon bark using time-honored techniques 
                  to preserve quality and flavor.
                </p>
              </div>
              <div className="bg-warm-cream p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-deep-brown mb-3">Factory</h3>
                <p className="text-deep-brown/70">
                  Our modern facility ensures consistent quality while maintaining the authentic character of 
                  Ceylon cinnamon through careful packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
