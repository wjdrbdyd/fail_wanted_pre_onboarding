import React, { useState } from 'react';
import './AsidePopupMenu.css';
import {ReactComponent as CloseIcon} from '../assets/icons/iconClosed.svg';
import WantedIcon from './WantedIcon';
import MpopMenuList from './MpopMenuList';
import DpopMenuList from './DpopMenuList';
const AsidePopupMenu = ({visibleMenu ,setVisibleMenu}) => {
  let [menuDList, setMenuDList] = useState(['MY 원티드', '프로필','지원 현황', '제안받기 현황', '좋아요', '북마크', '추천', '포인트', '로그아웃']); 
  let [menuMList, setMenuMList] = useState(['MY 원티드', '프로필', '이력서', '매치업', '추천','지원 현황', '프리랜서'
                                         ,'직군별 연봉','이벤트','커뮤니티', '기업서비스']); 

  return (
    <div className='menu-container'>
      <div className='menu-wrapper' onClick={(e) => {e.stopPropagation(); setVisibleMenu(false)}}>
        <div className="menu-header">
          <WantedIcon />
          <button type="button" onClick={(e) => {e.stopPropagation(); setVisibleMenu(false)}}>
            <CloseIcon/>
          </button>
        </div>
        {menuDList && <DpopMenuList menuList={menuDList}/>}
        {menuMList && <MpopMenuList menuList={menuMList}/>}
      </div>
      <div class="bubble-point"></div>
    </div>
  );
};

export default AsidePopupMenu;