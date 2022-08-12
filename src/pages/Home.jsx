import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import './index.scss';
import Category from '../components/Category/Category';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import '../scss/adaptive.scss';
import { TextField } from '@mui/material';

const Home = () => {
  const [open, setOpen] = useState(false);
  const onClickClose = () => {
    setOpen(!open);
  };

  function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return size;
  }

  const [height, width] = useWindowSize();

  return (
    <div>
      <Menu open={open} onClickClose={onClickClose} />
      <div className="main-back">
        <div className="main-black">
          <Header width={width} open={open} onClickClose={onClickClose} />
          <div className="main-content">
            <div className="main-content_text">
              <h5>#Экстрим</h5>
              <p>Юрий Поклад: «Динамо»</p>
              <p>как бы начинает работать заново</p>
            </div>
            {/* {width && (
              <h2
                style={{
                  position: 'absolute',
                  top: '120px',
                  margin: 0,
                  color: 'green',
                }}>{`Ширина экрана:  ${width}, ${height}`}</h2>
            )} */}
          </div>
        </div>
        <Category width={width} />
      </div>
      <News />
      <div className="article article_1">
        <div className="article_text">
          <div className="article_tag">#болельщикам</div>
          <div className="article_title">Юрий Поклад: «Динамо» как бы начинает работать заново</div>
        </div>
      </div>
      <div className="wrapper_links_subscribe">
        <div className="links_subcribe">
          <div className="links">
            <h2 className="links_title">Соцсети</h2>
            <div className="all-links">
              <ul className="ul-links">
                <li className="li-links">
                  <img src="./img/vk.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/facebook.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/instagram.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/youtube.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/telegram.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/tiktok.svg" alt="" />
                </li>
                <li className="li-links">
                  <img src="./img/twitter.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="subscribe">
            <h2 className="subscribe_title">Подписка</h2>
            <div className="subscribe_form">
              <TextField id="standard-basic" label="Введите ваш email" variant="standard" />
              {/* <input type="text" placeholder="Введите ваш email" /> */}
              <button className="subscribe_button">Подписаться</button>
            </div>
          </div>
        </div>
      </div>
      <div className="article article_2">
        <div className="article_text article_text_2">
          <div className="article_tag article_theme">Экстрим</div>
          <div className="article_title article_description">
            Интервью с Юрием Покладом. <br />
            Полный список всех медалей Беларуси на Европейских играх.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
