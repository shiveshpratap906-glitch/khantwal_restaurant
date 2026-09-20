import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  // Add item to cart
  const handleAddToCart = (food) => {
    setCartItems((currentItems) => {

      const existingItem = currentItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === food.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...food,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };


  // Increase quantity
  const handleIncrease = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };


  // Decrease quantity
  const handleDecrease = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  // Remove item
  const handleRemove = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };


  // Total number of products
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />

        <Menu onAddToCart={handleAddToCart} />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>


      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      )}
    </>
  );
}

export default App;