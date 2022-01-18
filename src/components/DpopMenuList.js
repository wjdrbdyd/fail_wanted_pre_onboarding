import React from 'react';

const DpopMenuList = ({menuList}) => {
  return (
    <>
    <ul className="menuPop-list menuPop-desktop">
          
      {
        menuList.map((menu, idx) => {
          if(idx === menuList.length - 1){
            return (
              <li key={idx}><a className="is-logout" href="/" aria-label=""><span>{menu}</span></a></li>
            )
          } else {
            return (
              <li key={idx}><a href="/" aria-label=""><span>{menu}</span></a></li>
            )
          }
          
        })
      }
      
    </ul>
    </>
  );
};

export default DpopMenuList;