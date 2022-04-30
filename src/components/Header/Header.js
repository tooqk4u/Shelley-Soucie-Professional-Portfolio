import React from 'react';
import Navigation from '../Nav/Nav';
// renders header handlePageChange is a state setter passed down from App
// it is just passed on to Navigation in this function
function Header(props) {
  const { handlePageChange } = props
  return (
    <header>
      <div className="bg-theme-2 title-bar skew my-4 py-2">
        <a href='/'><h1 className="text-theme-1 anti-skew pl-4">Shelley Soucie</h1></a>
      </div>
      <div className="bg-theme-2 skew subtitle-bar py-2 pl-4">
        <h2 className="text-theme-1 anti-skew pl-4">Full Stack Developer</h2>
      </div>
      <Navigation handlePageChange={handlePageChange}></Navigation>
    </header>
  );
}

export default Header;
