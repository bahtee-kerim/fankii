import React from 'react';
import s from './EmployeesData.module.css';
import ava from './../../../common/icons/empAva.svg';

const EmployeesData = () => {
  return (
    <div className={s.employeesWrapper}>
      <div className={s.firstContainer}>
        <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.date}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.secondContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateB}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.thirdContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateC}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.fourthContainer}>
        <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.date}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.fifthContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateB}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.sixthContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateC}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.seventhContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.date}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.eighthContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateB}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

      <div className={s.ninethContainer}>
      <div className={s.workerContainer}>
          <img src={ava} />
          <div className={s.worker}>
            <div className={s.name}>Name Surname</div>
            <div className={s.position}>Employee-position</div>
          </div>
        </div>
        <div className={s.dateC}>
          DD MONTH YYYY - DD MONTH YYYY
        </div>
      </div>

    </div>
  )
}

export default EmployeesData;
