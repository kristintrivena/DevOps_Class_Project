import React from 'react';
import '../../styling/menu.css'; // Import file CSS
import sweetDrink1 from '../../assets/teh_hangat.png'; 
import sweetDrink2 from '../../assets/hot_chocolate.png';
import sweetDrink3 from '../../assets/minuman_hangat.png'; 

const Menu = () => {
  // Data untuk minuman hangat
  const sweetDrinks = [
    {
      id: 1,
      image: sweetDrink1,
      name: 'Teh Hangat',
      description: 'Teh hangat untuk menghangatkan tubuh.',
      price: 'IDR 50.000',
    },
    {
      id: 2,
      image: sweetDrink2,
      name: 'Kopi Susu Hangat',
      description: 'Kopi susu hangat dengan rasa yang nikmat.',
      price: 'IDR 40.000',
    },
    {
      id: 3,
      image: sweetDrink3,
      name: 'Cappuccino Hangat',
      description: 'Cappuccino hangat yang creamy.',
      price: 'IDR 60.000',
    }
  ];

  // Hanya menampilkan data untuk minuman hangat
  const menuItems = sweetDrinks;

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Ristorante de Vicenzo Menu</h1>
        <p>Temukan makanan favorit kamu dan pesan segera</p>
        <h2>Minuman Hangat</h2>
      </header>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            <div className="menu-buttons">
              <button className="add-to-cart">Add to cart</button>
              <button className="order-now">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
