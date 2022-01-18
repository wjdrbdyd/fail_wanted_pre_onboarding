import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Overlay.css';

const Overlay = () => {
  let categories = useSelector((state) => state.categoriesReducer);
  let [subView, setSubView] = useState(false);
  let [categoryId, setCategoryId]= useState();
  let [subCategory, setSubCategory] = useState();
  let [subWidth, setSubWidth] = useState(0);
  useEffect(()=>{
    let copySub = categories.filter((category) => {
      return category.id === categoryId;
    })
    let sub = {...copySub[0]};
    if(sub.tags != null){
      setSubWidth((parseInt(sub.tags.length / 22) + 1) * 200);
    }
    setSubCategory(sub);
    
  }, [categoryId]);

  let ulWidth ={
    width: `${subWidth}px`
  }

  let dispatch = useDispatch();
  return (
    
    <div className='overlay-container'>
      
      <nav className='explore-container' onMouseLeave={()=> dispatch({type:'mouseOut'})}>
        <section className='main-category' >
          <a href="/" >
            <em onMouseOver={ ()=> {setCategoryId(null)} }>
              <h2>직군 전체</h2>
            </em>
          </a>
          
          <ul>
            {categories && categories.map((category, idx) => {
              return (
                <li key={idx} className="category-item" >
                  <a href="/" className="" aria-label="">
                    <em  onMouseOver={ () => {setCategoryId(category.id);} } >
                      {category.title}
                    </em>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      {categoryId != null &&
        <section className='sub-category'>
          <ul style={ulWidth}>
          { 
            (subCategory != null) ?  
              <li key={subCategory.id} className="category-item">
                <a href="/">
                  {subCategory.title} 전체
                </a> 
                <i className="icon-arrow_right"></i>
              </li>
            : null 
          }
          { 
            (subCategory.tags != null) ?  
              subCategory.tags.map((sub, idx) => {
                return (
                  <li key={sub.id} className="category-item">
                    <a href="/">
                      {sub.title}
                    </a> 
                    <i className="icon-arrow_right"></i>
                  </li>
                )
              }) 
            : null 
          }
          </ul>
        </section>
      }
      </nav>
    </div>
  );
};

export default Overlay;