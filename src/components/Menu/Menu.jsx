import React from 'react';
import './index.scss';
import { CSSTransition } from 'react-transition-group';
import './transition.css';
import { TextField } from '@mui/material';

const Menu = ({ open, onClickClose }) => {
  const styleForPlus = !open
    ? { transform: '', transition: 'transform 0.3s' }
    : { transform: 'rotate(360deg)', transition: 'all 0.3s' };

  return (
    <CSSTransition in={open} classNames="alert" timeout={200} unmountOnExit>
      <div className="menu-open">
        <header>
          <div className="logo">
            <img src="./img/logo_footer.svg" alt="" />
          </div>
          <div style={styleForPlus} onClick={() => onClickClose()} className="close_button">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="white" />
              <path
                d="M17.2441 23.928C17.4633 22.7889 17.7582 21.9837 19.792 21.0802C21.4782 21.9837 21.4633 22.7889 21.2441 23.928L21.0552 24.91H24.0552L24.2441 23.928C24.5199 22.4943 24.1671 21.0017 22.6949 19.9215C24.5714 18.9002 25.4797 17.5058 25.7555 16.0721L25.9444 15.0901H22.9444L22.7555 16.0721C22.5363 17.2112 22.2679 17.8789 20.2416 18.7431C18.5479 17.8789 18.5363 17.2112 18.7555 16.0721L18.9444 15.0901H15.9444L15.7555 16.0721C15.4797 17.5058 15.8514 18.9002 17.3349 19.9215C15.4471 21.0017 14.5199 22.4943 14.2441 23.928L14.0552 24.91H17.0552L17.2441 23.928Z"
                fill="#C0160A"
              />
            </svg>
          </div>
        </header>
        <div className="content">
          <div className="content_menu">
            <ul className="sub-menu">
              <li>Review</li>
              <li>Экстрим</li>
              <li>Легенды</li>
              <li>зож и туризм</li>
              <li>Позірк</li>
              <li className="li-last">Треш</li>
            </ul>
            <ul className="sport">
              <li>Футбол </li>
              <li>Хоккей </li>
              <li>Биатлон</li>
              <li>Теннис</li>
              <li>Гандбол </li>
              <li>Баскетбол </li>
              <li>Бокс </li>
              <li>Легкая атлетика </li>
              <li className="li-last">Другое</li>
            </ul>
            <ul className="info_callback">
              <li>О проекте</li>
              <li className="li-last">Обратная связь</li>
            </ul>
          </div>
        </div>
        <div className="links">
          <ul>
            <li className="li-links">
              <img src="./img/vk_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/facebook_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/instagram_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/youtube_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/telegram_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/tiktok_footer.svg" alt="" />
            </li>
            <li className="li-links">
              <img src="./img/twitter_footer.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="menu_footer">
          <div className="ads">
            <p>Размещение рекламы:</p>
            <p>ads@sporthub.news</p>
          </div>
          <div className="subscribe">
            <p>Подписка:</p>
            <TextField id="standard-basic" label="Введите ваш email" variant="standard" />

            <button className="subscribe_button">Подписаться</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
