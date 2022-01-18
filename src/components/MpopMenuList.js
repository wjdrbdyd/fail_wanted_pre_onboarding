import React from 'react';

const MPopMenuList = ({menuList}) => {
  return (
    <>
    <ul className="menuPop-list menuPop-mobile">
          
      {
        menuList.map((menu, idx) => {
          if(idx === 0){
            return (
              <li key={idx}>
              <a href="/" aria-label="">
                <span>{menu}</span>
                <div className="profilePic" style={ {backgroundImage: `url(https://lh3.googleusercontent.com/a/AATXAJzPW9EMBypGk6L9PW7-68AdF0bQeuo3XXw67pwn=s96-c)`}}>
                </div>
              </a>
            </li>
            )
          } else if (menu.indexOf('div') > -1){
            return (<li key={idx} className="menuPop-divider"><a href="/" >{menu}</a></li>);
          } else {
            return(<li key={idx}><a href="/" className="" aria-label="">{menu}</a></li>);
          }
        })
      }
      
    </ul>
    </>
  );
};

export default MPopMenuList;