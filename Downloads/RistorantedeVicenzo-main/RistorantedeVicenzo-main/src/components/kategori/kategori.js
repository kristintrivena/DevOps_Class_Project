import React from 'react';
import '../../styling/kategori.css';
import { useNavigate } from 'react-router-dom';
import kategori_makanan1 from '../../assets/pembuka.png';
import kategori_makanan2 from '../../assets/makanan_manis.png';
import kategori_makanan3 from '../../assets/makanan_penutup.png';
import kategori_minuman1 from '../../assets/minuman_sehat.png';
import kategori_minuman2 from '../../assets/minuman_ringan.png';
import kategori_minuman3 from '../../assets/minuman_hangat (2).png';

const Kategori = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/menu/${category}`);
  };

  return (
    <div className="kategori-page">
      {/* Section header */}
      <header className="header">
        <h1>Ristorante de Vicenzo Menu</h1>
        <p>Temukan makanan favorit kamu dan pesan segera</p>
      </header>

      {/* Section Makanan dan Minuman */}
      <section className="menu-section">
        <h2>Makanan</h2>
        <div className="menu-container">
          <div className="menu-item">
            <img src={kategori_makanan1} alt="Pembuka" />
            <button>Pembuka</button>
          </div>
          <div className="menu-item">
            <img src={kategori_makanan2} alt="Manis" />
            <button>Manis</button>
          </div>
          <div className="menu-item">
            <img src={kategori_makanan3} alt="Penutup" />
            <button>Penutup</button>
          </div>
        </div>

        <h2>Minuman</h2>
        <div className="menu-container">
          <div className="menu-item">
            <img src={kategori_minuman1} alt="Sehat" />
            <button>Sehat</button>
          </div>
          <div className="menu-item">
            <img src={kategori_minuman2} alt="Ringan" />
            <button>Ringan</button>
          </div>
          <div className="menu-item">
            <img src={kategori_minuman3} alt="Hangat" />
            <button onClick={() => handleCategoryClick('minuman-hangat')}>Hangat</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kategori;
