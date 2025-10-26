import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <header className="header">
        <div className="header__wrap">
          <h1 className="header__title">{title}</h1>
          {subtitle && <p className="header__subtitle">{subtitle}</p>}
        </div>
      </header>
    );
  }
}

export default Header;
