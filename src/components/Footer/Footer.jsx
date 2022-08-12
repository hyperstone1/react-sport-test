import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <header className="footer_header">
          <ul>
            <img src="./img/logo_footer.svg" alt="" />
            <li className>О проекте</li>
            <li>Обратная связь</li>
            <h4 className="li-ads">
              Реклама: <p>ads@sporthub.news</p>
            </h4>
          </ul>
        </header>
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
        <div className="copyright">
          <div className="copy_sporthub">© 2022 «Спортхаб»</div>
          <div className="copy_company">
            <img src="./img/pras_logo.svg" alt="" />
            <p>Разработка сайта - компания PRAS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
