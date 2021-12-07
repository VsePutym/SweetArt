import s from './Footer.module.scss';

import React from 'react';

const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.info}>
        <ul>
          <li>Телефон: +79633265671</li>
          <li>Адрес: Санкт-Петербург ул.Невский проспект д112 </li>
          <li>instagram : galinaMednis</li>
          <li>SweetArt.app</li>
        </ul>
        <ul>
          <li>Заказы принимаются за 3-7д. до срока реализации</li>
          <li>Доставка оформляется за ваш счёт</li>
          <li>Минимальная сумма заказ от 2000р</li>
          <li>По всем интересующим вас вопросам вы можите связаться в Telegram, WhatsApp или по номеру телефона</li>
        </ul>
      </div>
      <div className={s.myAd}>
          <p>Website design and creation by Vse Putyom</p>
          <p>По вопросам создания сайта твой мечты пиши, звони:  +79633265671, Telegram, WhatsApp Юра</p>
      </div>
    </div>
  );
};

export default Footer;