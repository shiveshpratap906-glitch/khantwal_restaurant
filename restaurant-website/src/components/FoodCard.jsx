function FoodCard({ food, onAddToCart }) {
    return (
        <article className="food-card">
            <div className="food-image-container">
                <img
                    src={food.image}
                    alt={food.name}
                    className="food-image"
                />

                {food.bestseller && (
                    <span className="bestseller-badge">
                        ⭐ Bestseller
                    </span>
                )}
            </div>

            <div className="food-content">
                <div className="food-meta">
                    <span
                        className={`food-type ${food.type === "veg" ? "veg" : "non-veg"
                            }`}
                    >
                        <span className="food-type-dot"></span>
                        {food.type === "veg" ? "VEG" : "NON-VEG"}
                    </span>

                    {food.spicy && (
                        <span className="spicy-badge">
                            🌶️ Spicy
                        </span>
                    )}
                </div>

                <div className="food-title-row">
                    <h3>{food.name}</h3>

                    <span className="food-price">
                        ₹{food.price}
                    </span>
                </div>

                <p className="food-description">
                    {food.description}
                </p>

                <button
                    className="add-cart-button"
                    onClick={() => onAddToCart(food)}
                >
                    + Add to Cart
                </button>
            </div>
        </article>
    );
}

export default FoodCard;