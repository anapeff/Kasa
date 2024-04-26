import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './_carrousel.scss';
import logements from '../../data/logements.json';
import arrowLeft from '../../images/Arrow-left.png';
import arrowRight from '../../images/Arrow-right.png';

const Carrousel = () => {
  const { id } = useParams();
  const pageData = logements.find((item) => item.id === id);

  // Initialiser l'index de l'image 
  const [Index, setIndex] = useState(0);
  // Passe à l'image suivante 
  const next = () => {
    setIndex((Index) => (Index + 1) % pageData.pictures.length);
  };
  // Revenir à l'image précédente 
  const prev = () => {
    setIndex((Index) => (Index - 1 + pageData.pictures.length) % pageData.pictures.length);
  };

  return (
    <div className="carousel-container">
      <img src={pageData.pictures[Index]} alt="Appartement" className="carousel-image" />
      {(pageData.pictures.length > 1) &&
        <>
          <img className="carousel-button prev" alt="prev" src={arrowLeft} onClick={prev} />
          <img className="carousel-button next" alt="next" src={arrowRight} onClick={next} />
          <div className='counterContainer'>
            <div>{Index + 1}/{pageData.pictures.length}</div>
          </div>
        </>
      }
    </div>
  );
};

export default Carrousel;


