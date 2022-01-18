import React from 'react';
import {ReactComponent as Dkybi} from '../assets/icons/icondkybi.svg';

const Slide = ({currentSlide, slide, dynamicWidth, idx }) => {
  let dynamicStyle = {
    width: `${dynamicWidth}px`
  }
  return (
    <div idx={idx} className={`slick-slide ${(currentSlide === idx) && 'slick-active slick-center slick-current'}`}   style={dynamicStyle}>
      <div>
        <div style={{width:'100%', display:'inline-block'}}>
          <div className={`carousel-img ${(currentSlide === idx) && 'carousel-img-active'}`} >
            <a href="/">
              <img src={slide.image.origin} alt={slide.title} className="slide-image"/>
            </a>
          </div>
          <div className={`carousel-info  ${(currentSlide === idx) && 'info-active'}`} >
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <hr className="carousel-info-divider divider"/>
            <a href='/' className='btn-root btn-text btn-medium direct-button '>
              <span className="label-button">
                바로가기
                <span className="button-endIcon">
                  <span className='svg-icon-root'>
                    <Dkybi/>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;