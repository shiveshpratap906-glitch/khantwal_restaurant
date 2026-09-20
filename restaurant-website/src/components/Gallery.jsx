import { useState } from "react";

const galleryImages = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        title: "Our Restaurant",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
        title: "Delicious Food",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        title: "Restaurant Ambience",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
        title: "Dining Experience",
    },
    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85",
        title: "Freshly Prepared",
    },
    {
        id: 6,
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
        title: "Good Food",
    },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-heading">
                <p className="section-subtitle">OUR GALLERY</p>

                <h2>
                    A Taste of <span>TastyBite</span>
                </h2>

                <p>
                    Take a look at our food, ambience, and memorable
                    dining experience.
                </p>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((item) => (
                    <div
                        className="gallery-item"
                        key={item.id}
                        onClick={() => setSelectedImage(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <div className="gallery-overlay">
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="gallery-lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="gallery-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image preview"
                    >
                        ×
                    </button>

                    <img
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        className="gallery-preview-image"
                        onClick={(event) => event.stopPropagation()}
                    />

                    <p className="gallery-preview-title">
                        {selectedImage.title}
                    </p>
                </div>
            )}
        </section>
    );
}

export default Gallery;