import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTrashCan } from 'react-icons/fa6'
import './cart.css'; 

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
                <h3>{item.title}</h3>
                <p className='desc-item'>{item.desc}</p>
                <p className='prices'>IDR {item.price}</p>
            </div>
            <div className='controls'>
                <div className="quantity-controls">
                    <button className='minus' onClick={() => onDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='plus' onClick={() => onIncrement(item)}>+</button>
                </div>
                <button className="remove-button" onClick={() => onRemove(item)}><FaTrashCan /></button>
            </div>
        </div>
    );
};

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'Margherita Pizza',
            price: 98000,
            desc: 'Pizza Margherita, a classic offering from Italy. Experience the simple yet alluring flavors of tomato sauce, mozzarella, and fresh basil on thin crispy dough.',
            image: 'images/pizza-1.jpg',
            quantity: 1,
        },
        {
            id: 2,
            title: 'Grilled Chicken Panini Sandwich with Pesto',
            price: 42000,
            desc: 'A panini sandwich made with crispy toasted panini bread, filled with tender and juicy pieces of grilled chicken, topped with rich homemade basil pesto and perfectly melted mozzarella cheese.',
            image: 'images/panini.jpg',
            quantity: 1,
        },
        {
            id: 3,
            title: 'Osso Buco with Risotto Milanese',
            price: 35000,
            desc: 'Succulent cuts of beef shank, cooked with Italian spices until tender and flavorful. Served with a rich Milanese risotto flavored with saffron, creating a sumptuous and satisfying main course.',
            image: 'images/ossobuco.jpg', 
            quantity: 1,
        },
    ]);

    const handleIncrement = (item) => {
        setCartItems(
            cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };

    const handleDecrement = (item) => {
        setCartItems(
            cartItems.map((i) =>
                i.id === item.id && i.quantity > 1
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
            )
        );
    };

    const handleRemove = (item) => {
        setCartItems(cartItems.filter((i) => i.id !== item.id));
    };

    return (
        <div className='section-cart-item'>
            <h1>Ristorante de Vicenzo Menu Cart</h1>
            <p>This is your menu cart. Place your order and your food is ready to be served</p>
            <div className="menu-cart-section">
                <p>MY MENU CART</p>
            </div>
            <div className="shopping-cart">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
            <Link to="/payment" className="menu-button">Order Now</Link>
        </div>
    );
};

export default ShoppingCart;