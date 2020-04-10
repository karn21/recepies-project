import React from "react";

function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light display-3 text-uppercase letter-spacing text-slanted">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Recepies",
  styleClass: "header-hero",
};

export default Header;
