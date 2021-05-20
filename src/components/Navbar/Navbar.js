import React from 'react';
import s from './Navbar.module.css';
import arrow from './../../common/icons/chevron-up.svg';
import mainLogo from './../../common/icons/outline.svg';
import question from './../../common/icons/question.svg';
import request from './../../common/icons/flash.svg';
import calendar from './../../common/icons/calendar.svg';
import book from './../../common/icons/book.svg';
import openBook from './../../common/icons/book-open.svg';
import check from './../../common/icons/checkmark.svg';
import message from './../../common/icons/message.svg';
import trendingUp from './../../common/icons/trending-up.svg';
import copy from './../../common/icons/copy.svg';
import people from './../../common/icons/people.svg';
import settings from './../../common/icons/settings.svg';
import layers from './../../common/icons/layers.svg';

const Navbar = () => {
  return (
    <div className={s.navbarWrapper}>
        <div className={s.name}>
        <div className={s.companyName}>company name</div>
        <img src={arrow}></img>
      </div>
      <div className={s.main}>
        <img src={mainLogo}></img>
        <div className={s.mainName}>Главная</div>
        <img src={question} className={s.question}></img>
      </div>
      <div className={s.request}>
        <img src={request}></img>
        <div className={s.reqName}>Запросы</div>
      </div>
      <div className={s.calendar}>
        <img src={calendar}></img>
        <div className={s.calName}>Календарь</div>
      </div>
      <div className={s.book}>
        <img src={book}></img>
        <div className={s.bookName}>База знаний</div>
      </div>
      <div className={s.openBook}>
        <img src={openBook}></img>
        <div className={s.openBookName}>Новости</div>
      </div>
      <div className={s.check}>
        <img src={check}></img>
        <div className={s.checkName}>Задачи</div>
      </div>
      <div className={s.message}>
        <img src={message}></img>
        <div className={s.messName}>Чаты</div>
      </div>
      <div className={s.admin}>
        <div className={s.adminName}>администратор</div>
        <img src={arrow}></img>
      </div>
      <div className={s.statistic}>
        <img src={trendingUp}></img>
        <div className={s.statisticName}>Статистика компании</div>
      </div>
      <div className={s.copy}>
        <img src={copy}></img>
        <div className={s.copyName}>Структура компании</div>
      </div>
      <div className={s.people}>
        <img src={people}></img>
        <div className={s.peopleName}>Сотрудники</div>
      </div>
      <div className={s.book}>
        <img src={book}></img>
        <div className={s.bookName}>База знаний</div>
      </div>
      <div className={s.openBook}>
        <img src={openBook}></img>
        <div className={s.openBookName}>Новости</div>
      </div>
      <div className={s.settings}>
        <img src={settings}></img>
        <div className={s.settingsName}>Настройки</div>
      </div>
      <div className={s.layers}>
        <img src={layers}></img>
        <div className={s.layersName}>Служба поддержки</div>
      </div>
    </div>
  )
}

export default Navbar;