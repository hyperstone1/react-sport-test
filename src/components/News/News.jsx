import React from 'react';
import Reviews from '../Reviews/Reviews';
import './index.scss';

const News = () => {
  return (
    <div className="news_content">
      <div className="wrapper">
        <h2>Последнее</h2>
        <div className="news">
          <div className="news-block news-1">
            <figure className="fig">
              <img src="./img/image_1.png" alt="" />
            </figure>
            <div className="news_text">
              <div className="news_placeholder">
                <div className="news_placeholder_date">Сегодня | </div>
                <div className="news_placeholder_tag">#болельщикам</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
          <div className="news-block news-2">
            <figure className="fig">
              <img src="./img/image_2.png" alt="" />
            </figure>
            <div className="news_text">
              <div className="news_placeholder">
                <div className="news_placeholder_date">09.07.19 | </div>
                <div className="news_placeholder_tag">#любительский_спорт</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
          <div className="news-block news-3">
            <figure className="fig fig-3">
              <img src="./img/image_3.png" alt="" />
            </figure>
            <div className="news_text news_text_3">
              <div className="news_placeholder news_placeholder_1">
                <div className="news_placeholder_date">09.07.19 | </div>
                <div className="news_placeholder_tag">#Профессиональный_спорт</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
          <div className="news-block news-4">
            <figure className="fig">
              <img src="./img/image_1.png" alt="" />
            </figure>
            <div className="news_text">
              <div className="news_placeholder">
                <div className="news_placeholder_date">Сегодня |</div>
                <div className="news_placeholder_tag">#болельщикам</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
        </div>
        <Reviews />
        <div className="news">
          <div className="news-block news-4">
            <figure className="fig">
              <img src="./img/image_1.png" alt="" />
            </figure>
            <div className="news_text">
              <div className="news_placeholder">
                <div className="news_placeholder_date">Сегодня |</div>
                <div className="news_placeholder_tag">#болельщикам</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
          <div className="news-block news-3">
            <figure className="fig fig-3">
              <img src="./img/image_3.png" alt="" />
            </figure>
            <div className="news_text news_text_3">
              <div className="news_placeholder news_placeholder_1">
                <div className="news_placeholder_date">09.07.19 | </div>
                <div className="news_placeholder_tag">#Профессиональный_спорт</div>
              </div>
              <div className="news_title">
                Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
              </div>
              <div className="news_description">
                И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним
                «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
