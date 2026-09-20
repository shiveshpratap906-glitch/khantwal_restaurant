function Cart({ cartItems, onClose, onIncrease, onDecrease, onRemove }) {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const createWhatsAppMessage = () => {
        let message =
            "Hello TastyBite,\n\nI would like to place an order:\n\n";

        cartItems.forEach((item) => {
            message += `${item.name} x ${item.quantity} - ₹${item.price * item.quantity
                }\n`;
        });

        message += `\nTotal: ₹${total}`;

        const whatsappNumber = "919368979993";

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="cart-overlay">

            <div className="cart-panel">

                <div className="cart-header">
                    <h2>Your Order</h2>

                    <button
                        className="close-cart"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>


                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>

                        <h3>Your cart is empty</h3>

                        <p>
                            Add some delicious food from our menu.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">

                            {cartItems.map((item) => (
                                <div
                                    className="cart-item"
                                    key={item.id}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />

                                    <div className="cart-item-details">

                                        <h3>{item.name}</h3>

                                        <p>₹{item.price} each</p>

                                        <div className="quantity-controls">

                                            <button
                                                onClick={() => onDecrease(item.id)}
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() => onIncrease(item.id)}
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                    <div className="cart-item-right">

                                        <strong>
                                            ₹{item.price * item.quantity}
                                        </strong>

                                        <button
                                            className="remove-item"
                                            onClick={() => onRemove(item.id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>


                        <div className="cart-summary">

                            <div className="total-row">
                                <span>Total</span>
                                <strong>₹{total}</strong>
                            </div>

                            <button
                                className="whatsapp-order-button"
                                onClick={createWhatsAppMessage}
                            >
                                💬 Order on WhatsApp
                            </button>

                            <p className="whatsapp-note">
                                Your order will open in WhatsApp.
                            </p>

                        </div>
                    </>
                )}

            </div>

        </div>
    );
}

export default Cart;