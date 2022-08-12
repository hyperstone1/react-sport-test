import React from 'react';
import './index.scss';

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews_row">
        <div className="reviews_card reviews_card_1">
          <img src="./img/card_1.png" alt="" />
          <div className="reviews_name">Алексей Михайличенко</div>
          <div className="reviews_job">Главный тренер ф.к. Динамо</div>
          <div className="reviews_description">
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
        <div className="reviews_card reviews_card_2">
          <img src="./img/card_2.png" alt="" />
          <div className="reviews_name">Алексей Михайличенко</div>
          <div className="reviews_job">Главный тренер ф.к. Динамо</div>
          <div className="reviews_description">«Динамо» как бы начинает работать заново</div>
        </div>
        <div className="reviews_card reviews_card_3">
          <img src="./img/card_3.png" alt="" />
          <div className="reviews_name">Алексей Михайличенко</div>
          <div className="reviews_job">Главный тренер ф.к. Динамо</div>
          <div className="reviews_description">
            Сергей Корниленко станет играющим тренером «Крыльев советов»
          </div>
        </div>
        <div className="reviews_card reviews_card_4">
          <img src="./img/card_1.png" alt="" />
          <div className="reviews_name">Алексей Михайличенко</div>
          <div className="reviews_job">Главный тренер ф.к. Динамо</div>
          <div className="reviews_description">«Динамо» как бы начинает работать заново</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
