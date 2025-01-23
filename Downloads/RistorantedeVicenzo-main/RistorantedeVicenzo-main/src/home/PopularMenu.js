import React from 'react';
import '../styling/PopularMenu.css'; // Impor CSS jika diperlukan

const PopularMenu = () => {
    const menuItems = [
        {
            title: "Meat Lovers Pizza with Smoked Beef Topping",
            description: "An appetizing Meat Lovers Pizza topped with smoked beef. In the inside baked with mozzarella and parmesan cheese that melts perfectly on the crispy dough. Enjoy this delicious meat pizza in large sizes. ",
            price: "IDR 150.000",
            imgSrc: "/images/pizza.jpg", // Ganti dengan URL gambar Anda
        },
        {
            title: "Steak  with Crispy Potato and Mash Potato ",
            description: "Enjoy a perfectly cooked steak and you can customize your steak, served with crispy on the outside tender on the inside fries, and smooth, creamy mashed potatoes. A classic combination that never disappoints.",
            price: "IDR 200.000",
            imgSrc: "/images/steak.jpg", // Ganti dengan URL gambar Anda
        },
    ];

    return (
        <div className="popular-menu">
            <h2>Popular</h2>
            <p>Two popular dish from our restaurant</p>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div className="item-menu" key={index}>
                        <img src={item.imgSrc} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                        <button className="order-button">Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;