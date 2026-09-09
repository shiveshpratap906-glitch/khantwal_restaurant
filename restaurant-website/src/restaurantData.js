// ================================
// RESTAURANT INFORMATION
// ================================

export const restaurantInfo = {
    name: "TastyBite",

    whatsapp: "919876543210",

    phone: "+91 98765 43210",

    email: "hello@tastybite.com",

    address: "123 Main Street, Your City",

    openingHours: "Mon - Sun: 11:00 AM - 11:00 PM",

    description:
        "Fresh ingredients, delicious recipes, and unforgettable flavors.",
};


// ================================
// MENU DATA
// ================================

export const foodItems = [
    {
        id: 1,
        name: "Classic Chicken Burger",
        category: "Main Course",
        price: 249,
        type: "non-veg",
        bestseller: true,
        spicy: false,
        description:
            "Juicy grilled chicken, fresh lettuce, tomato and our signature sauce.",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 2,
        name: "Margherita Pizza",
        category: "Main Course",
        price: 299,
        type: "veg",
        bestseller: true,
        spicy: false,
        description:
            "Stone-baked pizza with tomato, mozzarella and fresh basil.",
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 3,
        name: "Creamy Alfredo Pasta",
        category: "Main Course",
        price: 279,
        type: "veg",
        bestseller: false,
        spicy: false,
        description:
            "Creamy parmesan sauce tossed with perfectly cooked pasta.",
        image:
            "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 4,
        name: "Crispy French Fries",
        category: "Starters",
        price: 129,
        type: "veg",
        bestseller: true,
        spicy: false,
        description:
            "Golden crispy fries seasoned with our special house seasoning.",
        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 5,
        name: "Crispy Chicken Wings",
        category: "Starters",
        price: 229,
        type: "non-veg",
        bestseller: false,
        spicy: true,
        description:
            "Crispy chicken wings coated with a delicious spicy glaze.",
        image:
            "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 6,
        name: "Chocolate Lava Cake",
        category: "Desserts",
        price: 179,
        type: "veg",
        bestseller: true,
        spicy: false,
        description:
            "Warm chocolate cake with a rich molten chocolate center.",
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 7,
        name: "Fresh Fruit Cheesecake",
        category: "Desserts",
        price: 199,
        type: "veg",
        bestseller: false,
        spicy: false,
        description:
            "Smooth creamy cheesecake topped with fresh seasonal fruits.",
        image:
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 8,
        name: "Classic Cold Coffee",
        category: "Drinks",
        price: 149,
        type: "veg",
        bestseller: false,
        spicy: false,
        description:
            "Chilled creamy coffee blended with milk and a touch of sweetness.",
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    },
];


// ================================
// MENU CATEGORIES
// ================================

export const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",
    "Drinks",
];