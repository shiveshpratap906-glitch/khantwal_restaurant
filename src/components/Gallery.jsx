import { useState } from "react";

const galleryImages = [
    {
        id: 1,
        image:
            "/images/restaurant/restaurant.jpg",
        title: "Our Restaurant",
    },
    {
        id: 2,
        image:
            "/images/restaurant/food.jpg",
        title: "Delicious Food",
    },
    {
        id: 3,
        image:
            "/images/restaurant/crowd.jpg",
        title: "Restaurant Ambience",
    },
    {
        id: 4,
        image:
            "/images/restaurant/dinning-table.jpg",
        title: "Dining Experience",
    },
    {
        id: 5,
        image:
            "/images/restaurant/fresh.png",
        title: "Freshly Prepared",
    },
    {
        id: 6,
        image:
            "/images/restaurant/good-food.jpg",
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