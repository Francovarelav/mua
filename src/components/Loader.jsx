import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-line"></div>
        <div className="loader-line"></div>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader; 