import React from 'react';
import s from './Content.module.css';
import Employees from './Employees/Employees';
import Header from './Header/Header';
import ReqCalendar from './ReqCalendar/ReqCalendar';

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Header />
      <Employees />
      <ReqCalendar />
    </div>
  )
}

export default Content;