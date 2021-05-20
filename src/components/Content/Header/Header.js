import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <div>
      <div className={s.headlineContainer}>
        <div className={s.headlineTitle}>
          <div className={s.headlineName}>headline title</div>
          <div className={s.notifications}>Notifications_Count</div>
        </div>
        <div className={s.daysContainer}>
          <div className={s.firstContainer}>DayName, dd mmm</div>
          <div className={s.secondContainer}>DayName, dd mmm</div>
          <div className={s.thirdContainer}>DayName, dd mmm</div>
        </div>
      </div>
    </div>
  )
}

export default Header
