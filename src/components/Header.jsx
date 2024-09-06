import React, { Component } from 'react';
import './Header.css'; // تأكد من وجود هذا الملف للتنسيقات

class Header extends Component {
  render() {
    return (
      <header className="custom-header">
        <div className="header-content">
          <h1>Walaa Ali </h1>
          <p>Full Stack Developer</p>
          <button> Download </button>
        </div>
      </header>
    );
  }
}

export default Header;
