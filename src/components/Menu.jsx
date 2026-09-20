import { useState } from "react";
import FoodCard from "./FoodCard";
import { foodItems, categories } from "../restaurantData";
import MenuGallery from "./MenuGallery";
function Menu({ onAddToCart }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? foodItems
            : foodItems.filter(
                (food) => food.category === activeCategory
            );

    return (
        <section id="menu" className="menu-section">

            <div className="section-heading">
                <p className="section-subtitle">OUR MENU</p>

                <h2>
                    Discover Our <span>Specialties</span>
                </h2>

                <p>
                    Carefully prepared dishes made with fresh ingredients
                    and unforgettable flavors.
                </p>
            </div>
            <MenuGallery />
            <div className="category-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            activeCategory === category
                                ? "category-button active"
                                : "category-button"
                        }
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="food-grid">
                {filteredItems.map((food) => (
                    <FoodCard
                        key={food.id}
                        food={food}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

        </section>
    );
}

export default Menu;