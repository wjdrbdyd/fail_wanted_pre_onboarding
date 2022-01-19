import React, { useEffect, useRef, useState } from 'react';
import './MainSection.css';
import {ReactComponent as NextArrow} from '../assets/icons/iconnextarrow.svg';
import {ReactComponent as PrevArrow} from '../assets/icons/iconprevarrow.svg';
import {ReactComponent as Dkybi} from '../assets/icons/icondkybi.svg';
import Slide from './Slide';
import { useSelector } from 'react-redux';

const MainSection = () => {
  
  const slideRef = useRef(null);
  let [slideWidth, setSlideWidth]= useState(1084);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({});
  useEffect(()=>{
    setWindowSize({
      width:document.documentElement.clientWidth, 
      height:document.documentElement.clientHeight
    })
  }, [])
  const [btnView, setBtnView] = useState(true);
  // const currentSlideRef = useRef(0);
  let slideData = useSelector((state) => {
    return state.reducer;
  });
  
  let slideCloneData = [...slideData]; 
  const TOTAL_SLIDES = slideData.length;
  // let initPos = -(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2));

  const [mounted, setMounted] = useState(false);
  const toggle = () => setMounted(!mounted);
  
  /*  브라우저 창 크기 조절시 크기 변화 적용. */
  const handleResize = () => {
    setTimeout(()=>{
      setWindowSize({
        width: document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      });
      
      slideRef.current.style.transition = "";
    }, 200);
  }
  let [dynamicWidth, setDynamicWidth]= useState(1060);
   
  let slideStyle = {
    opacity: 1,  
    width: `${slideWidth * (TOTAL_SLIDES * 4 )}px`, 
    transform: `translate3d(${0}px, 0, 0)`,
    transition: "",
  }
  useEffect(() => {
    
    window.addEventListener('resize', handleResize);
    if(window.innerWidth < 1200){
      setBtnView(false); 
      setDynamicWidth(windowSize.width - 80); // 1182  - 80 = 1102
      setSlideWidth(windowSize.width - 97); // 1199  -  97 = 1102
      slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * (windowSize.width - 80) - 40) - ( (currentSlide  ) * (windowSize.width - 80))}px, 0, 0)`;
    } else {
      setBtnView(true);
      setDynamicWidth(1060);  
      setSlideWidth(1084);
      slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * 1084 - ((windowSize.width - 1084) / 2)) - ( (currentSlide  ) * 1084)}px, 0, 0)`;
    }
    
    const timer = setInterval(()=>{
      slideRef.current.style.transition = "-webkit-transform 500ms ease 0s";
      if(currentSlide >= TOTAL_SLIDES){
        setTimeout(()=> {
          slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2))}px, 0, 0)`;
          setCurrentSlide(currentSlide => 0);
        }, 500);
      } else {
        setCurrentSlide(currentSlide => currentSlide + 1);
      }
      
      setTimeout(()=>{
        slideRef.current.style.transition = "";
      }, 500);
    }, 4000);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide, windowSize]);
 
  function translateCarousel(direction) {
    slideRef.current.style.transition = "-webkit-transform 500ms ease 0s";
    
    // 다음 슬라이드로 
    if(direction === 'next') {
      
      slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2)) - ( (currentSlide + 1) * slideWidth)}px, 0, 0)`;

      if(currentSlide >= TOTAL_SLIDES - 1){
        slideRef.current.style.transition = "";
        setCurrentSlide(0);
        slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2))}px, 0, 0)`;

        setTimeout(()=>{
          
        }, 500);
          
      } else {
        setCurrentSlide(currentSlide + 1)
        // currentSlideRef.current = currentSlide + 1;
      }

    // 이전 슬라이드
    } else {
      
      slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2)) + ( (1 - currentSlide) * slideWidth)}px, 0, 0)`;
      if(currentSlide === 0){
        slideRef.current.style.transition = "";
        setCurrentSlide(TOTAL_SLIDES - 1);
        slideRef.current.style.transform = `translate3d(${-(50 + TOTAL_SLIDES * slideWidth - ((windowSize.width - slideWidth) / 2)) - (TOTAL_SLIDES - 1) * slideWidth}px, 0, 0)`;

        setTimeout(()=>{

        }, 500);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }
  /* 드래그 슬라이더 구현하려다 안되서 주석.. */
  // const swipeStart = e => {
  //   console.log(this.props.verticalSwiping)
  //   if (this.props.verticalSwiping) {
  //     this.disableBodyScroll();
  //   }
    
  //   let state = swipeStart(e, this.props.swipe, this.props.draggable);
  //   console.log(state)
  //   state !== "" && this.setState(state);
  // };
  // const swipeMove = e => {
  //   let state = swipeMove(e, {
  //     ...this.props,
  //     ...this.state,
  //     trackRef: this.track,
  //     listRef: this.list,
  //     slideIndex: this.state.currentSlide
  //   });
  //   if (!state) return;
  //   if (state["swiping"]) {
  //     this.clickable = false;
  //   }
  //   this.setState(state);
  // };
  // const swipeEnd = e => {
  //   let state = swipeEnd(e, {
  //     ...this.props,
  //     ...this.state,
  //     trackRef: this.track,
  //     listRef: this.list,
  //     slideIndex: this.state.currentSlide
  //   });
  //   if (!state) return;
  //   let triggerSlideHandler = state["triggerSlideHandler"];
  //   delete state["triggerSlideHandler"];
  //   this.setState(state);
  //   if (triggerSlideHandler === undefined) return;
  //   this.slideHandler(triggerSlideHandler);
  //   if (this.props.verticalSwiping) {
  //     this.enableBodyScroll();
  //   }
  // };
  // const touchEnd = e => {
  //   this.swipeEnd(e);
  //   this.clickable = true;
  // };
  // const changeSlide = (options, dontAnimate = false) => {
  //   const spec = { ...this.props, ...this.state };
  //   let targetSlide = changeSlide(spec, options);
  //   if (targetSlide !== 0 && !targetSlide) return;
  //   if (dontAnimate === true) {
  //     this.slideHandler(targetSlide, dontAnimate);
  //   } else {
  //     this.slideHandler(targetSlide);
  //   }
  //   this.props.autoplay && this.autoPlay("update");
  //   if (this.props.focusOnSelect) {
  //     const nodes = this.list.querySelectorAll(".slick-current");
  //     nodes[0] && nodes[0].focus();
  //   }
  // };
  // const keyHandler = e => {
  //   let dir = keyHandler(e, this.props.accessibility, this.props.rtl);
  //   dir !== "" && changeSlide({ message: dir });
  // };
  // let listProps = {
  //   onMouseDown: swipeStart ,
  //   onMouseMove: swipeMove ,
  //   onMouseUp: swipeEnd ,
  //   onMouseLeave: swipeEnd,
  //   onTouchStart:  swipeStart ,
  //   onTouchMove: swipeMove,
  //   onTouchEnd: touchEnd ,
  //   onTouchCancel: swipeEnd ,
  //   onKeyDown: keyHandler 
  // };
  
  return (
    <div>
      <main className='main-section'>
        <div className='top-banner'>
          <div className='slick-slider slick-intialized'>
            <div className='slick-list' style={{padding: '0px 50px'}}> 
              <div className='slick-track' ref={slideRef} style={slideStyle} >
                { slideCloneData &&
                  (slideCloneData.map((slide, idx) => {
                    let cloneIdx = -(slideCloneData.length-idx);
                    return <Slide currentSlide={currentSlide} slide={slideCloneData[idx]} dynamicWidth={dynamicWidth} idx={cloneIdx} key={cloneIdx}/>
                  })) 
                }
                { slideData && 
                  (slideData.map((slide, idx) => {
                    return <Slide currentSlide={currentSlide} slide={slide} dynamicWidth={dynamicWidth}  idx={idx} key={slide.id}/>
                  })) 
                }
                { slideCloneData &&
                  (slideCloneData.map((slide, idx) => {
                    let cloneIdx = slideData.length + idx;
                    return <Slide currentSlide={currentSlide} slide={slideCloneData[idx]} dynamicWidth={dynamicWidth}  idx={cloneIdx} key={cloneIdx}/>
                  })) 
                }
              </div>
            </div>
          </div>
          {btnView &&
            <>
            <button type="button" className='top-arrow nextArrow' onClick={ () => { translateCarousel('next'); toggle(); } }>
              <span className='svg-icon-root'>
                <NextArrow />
              </span>
            </button>
            <button type="button" className='top-arrow prevArrow' onClick={ () => { translateCarousel('prev'); } }>
              <span className='svg-icon-root'>
                <PrevArrow />
              </span>
            </button></>
          }
        </div>
      </main>
    </div>
  );
};


export default MainSection;