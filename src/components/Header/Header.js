import React from 'react';
import s from './Header.module.css';
import logoGroup from './../../common/icons/Group69.svg';
import logoName from './../../common/icons/Fanki.svg';
import bell from './../../common/icons/bell.svg';
import avatar from './../../common/icons/21.svg';
import arrow from './../../common/icons/chevron-up.svg';
import divider from './../../common/icons/Divider.svg';

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.headerContainer}>
      <div className={s.logoContainer}>
      <div className={s.logoGroup}><img src={logoGroup} /></div>
      <div className={s.logoName}><img src={logoName} /></div>
      </div>
      <img className={s.firstLine} src={divider} />
    <div className={s.searchContainer}>
    <div className={s.bell}><img src={bell} /></div>
      <div className={s.inp}><input placeholder="Сообщений нет" /></div>
    </div>
    <img className={s.secondLine} src={divider} />
      <div className={s.aboutMe}>
      <div className={s.name}>Александров Александр</div>
      <div className={s.description}>Frontend Разработчик</div>
      </div>
    <div className={s.avatarContainer}>
      <div className={s.avatar}><img src={avatar} /> </div>
      <div className={s.arrow}><img src={arrow} /></div>
    </div>
    </div>
    </div>
  )
}

export default Header;