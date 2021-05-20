import React from 'react';
import s from './LastBlock.module.css';
import ava from './../../../common/icons/26.svg';
import smile from './../../../common/icons/Smile.svg';
import moreVertical from './../../../common/icons/more-vertical.svg';
import paperPlane from './../../../common/icons/paper-plane.svg';
import avatwo from './../../../common/icons/avaTwo.svg';
import renewalImg from './../../../common/icons/assets.svg';
import circle from './../../../common/icons/message-circle.svg';
import meme from './../../../common/icons/Emote.svg';
import smallSmile from './../../../common/icons/Smile.svg';
import foto from './../../../common/icons/1.svg';

const LastBlock = () => {
  return (
    <div>
      <div className={s.lastBlockContainer}>
        <div className={s.waterfall}>
          <div className={s.waterfallHeader}>
            <div className={s.events}>Водопад событий</div>
            <div className={s.number}>2</div>
          </div>
            <div className={s.newContainer}>
              <div className={s.new}>Новое</div>
            </div>
            <div className={s.free}></div>
            <div className={s.company}>
              <div className={s.compLittle}>
                <img src={ava} />
                <div className={s.companyName}>Company Sample Name</div>
                <div className={s.date}>Сегодня, 10:50</div>
              </div>
            </div>
            <div className={s.text}>
            <div className={s.textInside}>Текст обьявления, который написан от лица компании</div>
            </div>
              <div className={s.sotr}>
              <div className={s.sotrudnikContainer}>
                <div className={s.smileContainer}>
                  <img className={s.smile} src={smile} />
                  <img className={s.more} src={moreVertical} />
                </div>
              </div>
              </div>
              <div className={s.planeContainer}>
                <div className={s.plane}>
                <img src={paperPlane} />
                </div>
              </div>
              <div className={s.employeeContainer}>
                <img src={avatwo} />
                <div className={s.nameSurname}>Калинина Оксана </div>
                <div className={s.date}>Сегодня, 9:20 </div>
              </div>
              <div className={s.emptext}>
                <div className={s.tex}>Текст обьявления, который написан от лица сотрудника</div>
              </div>
              <div className={s.yesterdayContainer}>
                <div className={s.yesterday}>Вчера</div>
              </div>
              <div className={s.renewal}>
                <div className={s.renewalText}>Обновления</div>
                <img src={renewalImg} />
              </div>
              <div className={s.renewalDate}>
                <div className={s.april}>30 апреля 2020, 12:00</div>
              </div>
              <div className={s.descr}>
                <div className={s.descriptionFirst}>Здесь будет находится длинный очень длинный заголовокпубликованной новости в водопаде событий</div>
              </div>
              <div className={s.descrTwo}>
                <div className={s.descriptionSecond}>Разнообразный и богатый опыт постоянный и количкственный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых...</div>
              </div>
              <div className={s.gridBlock}>
                <div className={s.first}>
                  <div className={s.memeContainer}>
                    <div className={s.firstMeme}>
                      <img src={meme} />
                      <div className={s.three}>3</div>
                    </div>
                    <div className={s.secondMeme}>
                      <img src={meme} />
                      <div className={s.five}>5</div>
                    </div>
                    <div className={s.thirdMeme}>
                      <img className={s.smallSmile} src={smallSmile} />
                    </div>
                  </div>
                </div>
                <div className={s.second}></div>
                <div className={s.third}>
                  <div className={s.commentsContainer}>
                    <img className={s.circle} src={circle} />
                    <div className={s.comments}>18 комментариев</div>
                  </div>
                </div>
              </div>
              <div className={s.empty}>

              </div>
        </div>
        <div className={s.notification}>

          <div className={s.notificationHeader}>
            <div className={s.note}>Уведомления</div>
            <div className={s.number}>2</div>
          </div>

          <div className={s.fullNameBlock}>
            <img src={foto} />
            <div className={s.fullName}>Владимир Владимирович</div>
            <div className={s.time}>9:22</div>
          </div>
          <div className={s.comment}>Назначает вам задачу</div>
          <div className={s.details}>Подготовить обновленную презентацию разработанного продукта</div>

          <div className={s.fullNameBlock}>
            <img src={foto} />
            <div className={s.fullName}>Владимир Владимирович</div>
            <div className={s.time}>9:22</div>
          </div>
          <div className={s.commenttt}>Создает событие</div>
          <div className={s.mobile}>Презентация IT отдела, Улучшение мобильной платежной системы.</div>
          <div className={s.groupEvent}>Групповое событие</div>

          <div className={s.fullNameBlock}>
            <img src={foto} />
            <div className={s.fullName}>Владимир Владимирович</div>
            <div className={s.time}>9:22</div>
          </div>
          <div className={s.commenttt}>Создает событие</div>
          <div className={s.mobile}>Презентация IT отдела, Улучшение мобильной платежной системы.</div>
          <div className={s.groupEvent}>Групповое событие</div>

          <div className={s.fullNameBlock}>
            <img src={foto} />
            <div className={s.fullName}>Владимир Владимирович</div>
            <div className={s.time}>9:22</div>
          </div>
          <div className={s.commenttt}>Создает событие</div>
          <div className={s.mobile}>Презентация IT отдела, Улучшение мобильной платежной системы.</div>
          <div className={s.groupEvent}>Групповое событие</div>

          <div className={s.fullNameBlock}>
            <img src={foto} />
            <div className={s.fullName}>Владимир Владимирович</div>
            <div className={s.time}>9:22</div>
          </div>
          <div className={s.commenttt}>Создает событие</div>
          <div className={s.mobile}>Презентация IT отдела, Улучшение</div>

          <div className={s.footer}>
            <div className={s.footName}>Уведомления &#8594;</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LastBlock;
