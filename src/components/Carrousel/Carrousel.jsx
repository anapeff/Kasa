import React, { useState } from 'react';
import './_carrousel.scss';
import logements from '../../data/logements.json';
import arrowLeft from '../../images/Arrow-left.png';
import arrowRight from '../../images/Arrow-right.png';

const Carrousel = ({ logementId }) => {
  const pageData = logements.find((item) => item.id === logementId);
  const [currentIndex, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pageData.pictures.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + pageData.pictures.length) % pageData.pictures.length);
  };

  return (
    <div className="carousel-container">
      <img src={pageData.pictures[currentIndex]} alt="Appartement" className="carousel-image" />
      <img className="carousel-button prev" alt="prev" src={arrowLeft} onClick={prev} />
      <img className="carousel-button next" alt="next" src={arrowRight} onClick={next} />
      <div className='counterContainer'>
        <div>{currentIndex + 1}/{pageData.pictures.length}</div>
      </div>
    </div>
  );
};

export default Carrousel;

