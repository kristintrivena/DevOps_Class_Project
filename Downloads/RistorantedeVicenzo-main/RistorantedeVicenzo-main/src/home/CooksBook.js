import React from 'react';
import '../styling/CooksBook.css';
import {GoChevronRight} from 'react-icons/go'

const CookBooks = () => {
  const menuItems = [
    {
      title: 'Mushroom Risotto',
      description:
        "Who wouldn't be tempted by the deliciousness of mushroom risotto?  This classic Italian dish comes with a smooth creamy texture and appetizing mushroom aroma.  Made with quality arborio rice, rich chicken stock, and a variety of fresh mushrooms, every mouthful is a treat for your taste buds.  Perfect as a main course or for a special occasion.",
      imgSrc: '/images/risotto.jpg',
      tags: ['healthy', 'risotto'],
    },
    {
      title: 'Lasagna Bolognese',
      description:
        "Homemade Lasagna Bolognese that is super creamy and addictive!  The soft pasta layers blend perfectly with the savory bolognese sauce and creamy bechamel sauce. Plus, the melted mozzarella cheese makes it addictive. Perfect for a family dinner or special occasion. Let's try making it at home! ",
      imgSrc: '/images/lasagna.jpg',
      tags: ['lasagna', 'bolognese'],
    },
    {
      title: 'Porcini Mushroom Arancini',
      description:
        "Savory and crispy porcini mushroom arancini! Rice balls filled with fragrant porcini mushrooms, minced beef and melt-in-your-mouth mozzarella cheese. Breaded and deep fried until golden. Perfect as an appetizer or a leisurely snack. Let's try making it at home!",
      imgSrc: '/images/arancini.jpg',
      tags: ['arancini', 'savory'],
    },
  ];

  return (
    <div className="cook-books">
      <h1>CookBooks</h1>
      <p className='subtitle'>Get Our Book Recipes</p>
      <div className="menu-items-full">
        <div className="menu-item-first">
          <div className="menu-item-image">
            <img src={menuItems[0].imgSrc} alt={menuItems[0].title} />
          </div>
          <div className="menu-item-content">
            <h2>{menuItems[0].title}</h2>
            <p>{menuItems[0].description}</p>
            <div className="tags">
              {menuItems[0].tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div class="read-more-container">
                <a href="/halaman-lain" class="read-more-link">
                    <span class="read-more-text">Read more ...</span>
                    <span ><GoChevronRight fontSize={20}/></span> 
                </a>
            </div>
          </div>
        </div>
        <div className="menu-items-container">
          {menuItems.slice(1).map((item, index) => (
            <div className="menu-item-index" key={index}>
              <div className="menu-item-image-1">
                <img src={item.imgSrc} alt={item.title} />
                <div className="tags-upper">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="menu-item-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div class="read-more-container">
                <a href="/halaman-lain" class="read-more-link">
                    <span class="read-more-text">Read more ...</span>
                    <span ><GoChevronRight fontSize={20}/></span> 
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookBooks;