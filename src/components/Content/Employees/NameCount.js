import React from 'react';
import s from './NameCount.module.css';
import greenDivider from './../../../common/icons/greenDivider.svg';
import blueDivider from './../../../common/icons/blueDivider.svg';
import yellowDivider from './../../../common/icons/yellowDivider.svg';
import redDivider from './../../../common/icons/redDivider.svg';

const NameCount = () => {
  return (
    <div className={s.inputWrapper}>

      <div className={s.firstContainer}>
        <img src={greenDivider} />
      <input className={s.firstInput} placeholder={"Name"} />
      <div className={s.count}>Count</div>
      </div>

      <div className={s.secondContainer}>
      <img src={blueDivider} />
      <input className={s.secondInput} placeholder={"Name"} />
      <div className={s.count}>Count</div>
      </div>

      <div className={s.thirdContainer}>
      <img src={yellowDivider} />
      <input className={s.thirdInput} placeholder={"Name"} />
      <div className={s.count}>Count</div>
      </div>

      <div className={s.fourthContainer}>
      <img src={redDivider} />
      <input className={s.fourthInput} placeholder={"Name"} />
      <div className={s.count}>Count</div>
      </div>

    </div>
  )
}

export default NameCount
