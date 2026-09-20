import { useState } from "react";

const menuImages = [
    {
        id: 1,
        name: "Starters",
        image: "/images/menu/starters.png",
    },
    {
        id: 2,
        name: "Sabji",
        image: "/images/menu/sabji.png",
    },
    {
        id: 3,
        name: "Main Course",
        image: "/images/menu/main-course.png",
    },
    {
        id: 4,
        name: "Desserts",
        image: "/images/menu/desserts.png",
    },
    {
        id: 5,
        name: "Indian Drinks",
        image: "/images/menu/indian-drinks.png",
    },
];

function MenuGallery() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    return (
        <>
            <div className="menu-gallery">
                {menuImages.map((item) => (
                    <div
                        className="menu-gallery-card"
                        key={item.id}
                        onClick={() => setSelectedMenu(item)}
                    >
                        <img
                            src={item.image}
                            alt={`${item.name} menu`}
                        />

                        <div className="menu-gallery-overlay">
                            <h3>{item.name}</h3>

                        </div>
                    </div>
                ))}
            </div>

            {selectedMenu && (
                <div
                    className="menu-lightbox"
                    onClick={() => setSelectedMenu(null)}
                >
                    <button
                        className="menu-lightbox-close"
                        onClick={() => setSelectedMenu(null)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                    <img
                        src={selectedMenu.image}
                        alt={`${selectedMenu.name} full menu`}
                        className="menu-lightbox-image"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

export default MenuGallery;