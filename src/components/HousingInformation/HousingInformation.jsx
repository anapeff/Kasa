import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import logements from '../../data/logements.json';
import Stars from '../Stars/Stars';
import './_housinginformation.scss';

const HousingInformation = () => {
  const { id } = useParams();
  const pageData = logements.find((item) => item.id === id);
  const equip = <ul className='equipements'> {pageData.equipments.map((equip) =>(
    <li className='equipement' key={equip}>{equip}</li>
    
    ))}
    </ul>
  return (
    <section className="InfosContainer">
      <div className='DataContainer'>
      <article className='left'>
      <h1 id="TitreAppart">{pageData.title}</h1>
      <p className="location">{pageData.location}</p>
      <ul>
        {pageData.tags.map((tag) => (
          <li className="tag" key={tag}>{tag}</li>
        ))}
      </ul>
      </article>
      <article className="NameContainer">
        <div className='names'>
        <div className="name">{pageData.host.name}</div>
        <img className="picture" src={pageData.host.picture} alt="img" />
        </div>
      <Stars logementId={id} />
      </article>
      </div>
      <div className='collapses'>
        <div className='collapseleft'>
        <Collapse
          title="Description"
          content={pageData.description}
          isOpen={false}
        /></div>
        <div className='collapseright' >
        <Collapse 
          title="Equipements"
          content={equip}
          isOpen={false}
        /></div>
      </div>
    </section>
  );
};

export default HousingInformation;