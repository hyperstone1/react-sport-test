import React from 'react';
import './index.scss';

const Category = ({ width }) => {
  return (
    <div className="category">
      <div className="wrapper">
        <ul className="menu">
          <li className="menu_li">Футбол</li>
          <li className="menu_li">Хоккей</li>
          <li className="menu_li">Биатлон</li>
          <li className="menu_li">Теннис</li>
          <li className="menu_li">Гандбол</li>
          <li className="menu_li">Баскетбол</li>
          <li className="menu_li">Бокс</li>
          <li className="menu_li">Легкая атлетика</li>
          <li className="menu_li">Другое</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
