import {ReactComponent as SearchIcon} from '../assets/icons/iconsearch.svg'
import {ReactComponent as NotiIcon} from '../assets/icons/iconnoti.svg'
import {ReactComponent as NewIcon} from '../assets/icons/iconnew.svg'
import {ReactComponent as BetaIcon} from '../assets/icons/iconbeta.svg'
import {ReactComponent as AlramIcon} from '../assets/icons/iconalram.svg'
import {ReactComponent as MenuIcon} from '../assets/icons/iconmenus.svg'
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import AsidePopupMenu from './AsidePopupMenu'

const Navbar = ({menuNames}) => {
  let [visibleMenu, setVisibleMenu] = useState(false);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="navbar" style={ { position: 'fixed' }} onClick={(e)=>{setVisibleMenu(false); } }>
        <div className='mainbar'>
          <nav className='mainbar-nav'>
            <div className='mainbar-nav-top'>
              <div className='top-logo'>
                <button className="hamberger" onClick={(e)=> {e.stopPropagation(); dispatch({type: 'mouseClick'})}} onMouseOver={()=> {dispatch({type: 'mouseHover'}); setVisibleMenu(false);} }>
                  <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" style={ { width: '17px', height: '14px', objectFit: 'contain' } } />
                </button>
                <a href="/" className='mainbar-logo'>
                  <i className="icon-logo_new"></i>
                </a>
              </div>
            </div>
            <ul className='menus'>
              {
                menuNames.map((menu, idx) => {
                  return (
                    <li key={idx}>
                      <a href="/" >{ menu }
                        {
                          menu === "커뮤니티" ? 
                          <em><NewIcon /></em>
                          : menu === "AI 합격예측" ?
                          <span><BetaIcon/></span>
                          : null
                        }
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            <aside className='aside-menu isLoggedIn'>
              <ul>
                <li>
                  <button type='button' className='searchButton'>
                    <SearchIcon />
                  </button>
                </li>
                <li className="notiAlarm">
                  <button type='button' className='notiButton'>
                    <NotiIcon />
                  </button>
                  <span className='badge-icon' style={{backgroundColor: "rgb(51, 102, 255)", width: "13px", height: "13px"}}>
                    <AlramIcon />
                  </span>
                </li>
                <li className='mdMoreVisible profileBox'>
                  <button type='button' className='profileButton' onClick={(e)=> {e.stopPropagation(); setVisibleMenu(!visibleMenu); dispatch({type:'overlayOffClick'})}}>
                    <div className="avatarBorder">
                      <div className="avatarImage" style={{backgroundImage:`url(${"https://lh3.googleusercontent.com/a/AATXAJzPW9EMBypGk6L9PW7-68AdF0bQeuo3XXw67pwn=s96-c"}), url(${"https://static.wanted.co.kr/images/profile_default.png"})`}}></div>
                    </div>
                  </button>
                  { 
                    visibleMenu && <AsidePopupMenu visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu}/>
                  }
                </li>
                <li className='mdMoreVisible leftDivision'>
                  <a href="/" className='dashboardButton'>기업 서비스</a>
                </li>
                <li className='aside-visible-menu'>
                  <button type='button' className='menuButton' onClick={(e) => {e.stopPropagation(); setVisibleMenu(true);}}>
                    <MenuIcon/>
                  </button>
                </li>
              </ul>
              { 
                visibleMenu && <div className="aside-visible-menu"><AsidePopupMenu visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu}/></div>
              }
            </aside>
          </nav>
        </div>
      </div>
    </div>
  );
};


export default Navbar;