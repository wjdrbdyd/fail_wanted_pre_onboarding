import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import MainSection from './components/MainSection';
import { useDispatch, useSelector } from 'react-redux';
import Overlay from './components/Overlay';

function App() {
  let [menuNames, setMenuNames] = useState(['채용', '이벤트', '직군별 연봉', '이력서', '커뮤니티', '프리랜서', 'AI 합격예측']);
  let [windowWidth, setWidnowWidth] = useState(window.innerWidth);
  let handleResize = () =>{
    setTimeout(() => {
      setWidnowWidth(window.innerWidth)
    }, 200)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize);

    if(windowWidth <= 767) {
      console.log(windowWidth);
      let copyMenus = ['홈', '채용', '이벤트'];
      setMenuNames(copyMenus);
    } else {
      let copyMenus = ['채용', '이벤트', '직군별 연봉', '이력서', '커뮤니티', '프리랜서', 'AI 합격예측'];
      setMenuNames(copyMenus)
    }
  }, [windowWidth]);

  let overlayView = useSelector((state)=> state.overlayReducer);
  let dispatch = useDispatch();
  return (
    <div className="App" onClick={(e)=> {dispatch({type: 'overlayOffClick'})}}>
      { menuNames && <Navbar menuNames={menuNames}/>}
      <div className="padding-line"></div>
      <MainSection />
      { overlayView && <Overlay /> }
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
    </div>
  );
}

export default App;
