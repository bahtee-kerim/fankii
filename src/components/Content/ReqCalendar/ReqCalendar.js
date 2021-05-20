import React from 'react';
import s from './ReqCalendar.module.css';
import outline from './../../../common/icons/chevron-left.svg';
import outline2 from './../../../common/icons/chevron-right.svg';
import ellipse from './../../../common/icons/Ellipse.svg';
import ellipse2 from './../../../common/icons/Ellipse2.svg';
import rectangle from './../../../common/icons/image7.jpg';
import LastBlock from './../LastBlock/LastBlock';

const ReqCalendar = () => {
  return (
    <div>
          <div className={s.reqWrap}>
      <div className={s.firstBlock}>
        <div className={s.requestContainer}>
          <div className={s.request}>Запросы</div>
          <div className={s.number}>1</div>
        </div>
        <div className={s.wrapOutlines}>
        <img src={outline} />
          <div>
            <div className={s.wrapUvas}>
            <div className={s.uVas}>У вас</div>
            <div className={s.two}>2 несогласованных запроса</div>
            </div>
              <div className={s.sotrudniki}>
              от сотрудников: <b>Петров Алексей и Шишкин Егор</b>
              </div>
            </div>

          <img src={outline2} />
        </div>
          <div className={s.ellipseWrap}>
          <img src={ellipse} />
          <img className={s.ellipimg} src={ellipse2} />
          </div>
          <div className={s.footer}>
            <div className={s.reqFoot}>Запросы &#8594;</div>
          </div>
      </div>
      <div className={s.secondBlock}>
        <div className={s.calendarContainer}>
          <div className={s.calendar}>Календарь</div>
          <div className={s.number}>1</div>
        </div>
        <div className={s.wrapOutlines}>
        <img className={s.outline} src={outline} />
        <div className={s.wrapAvg}>
          <div className={s.avgTwenty}>
          <div className={s.avg}>АВГ</div>
          <div className={s.twenty}>20</div>
          </div>
          <div className={s.timeWrap}>
          <div>10:00 - 11:00</div>
          <div className={s.group}>Групповое событие</div>
          </div>
          <div className={s.mobsistem}>Презентация мобильной системы</div>
        </div>
        <img className={s.outline2} src={outline2} />
        </div>
        <div className={s.ellipseWrap}>
          <img src={ellipse} />
          <img className={s.ellipimg} src={ellipse2} />
          </div>
          <div className={s.footer}>
            <div className={s.reqFoot}>Календарь &#8594;</div>
          </div>
      </div>
      <div className={s.thirdBlock}>
        <div className={s.baseContainer}>
          <div className={s.base}>База знаний</div>
          <div className={s.number}>1</div>
        </div>
        <div className={s.wrapOutlinesThird}>
        <img className={s.outlineThird} src={outline} />
          <img className={s.rectangle} src={rectangle} />
        <img className={s.outline2Third} src={outline2} />
        </div>
        <div className={s.newpublic}>Новых публикаций нет</div>
        <div className={s.ellipseWrap}>
          <img src={ellipse} />
          <img className={s.ellipimg} src={ellipse2} />
          </div>
          <div className={s.footer}>
            <div className={s.reqFoot}>База знаний &#8594;</div>
          </div>
      </div>
    </div>
    <LastBlock />
    </div>
    
  )
}

export default ReqCalendar;
