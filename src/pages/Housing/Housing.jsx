import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel'; 
import logements from "../../data/logements.json";
import ErrorPage from '../Error/Error404';
import HousingInformation from '../../components/HousingInformation/HousingInformation';


const Housing = () => {
  const { id } = useParams();
  const pageData = logements.find((item) => item.id === id);

  if (!pageData){ return <ErrorPage/> }

  return (
    <div>
    
      <Carrousel logementId={id} />
      <HousingInformation logementId={id} />
     
    
    </div>
  );
};

export default Housing;