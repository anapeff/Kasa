import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import imgBannerHome from '../../images/background.png';
import logements from "../../data/logements.json";
function Home() {
  return (
    <>
      
      <Banner
                image={imgBannerHome}
                text="Chez vous, partout et ailleurs"
            />


            
<section className="cardsPosition">
  {logements.map((logement) => {
    return (
      <Link key={logement.id} className="paddingCard" to={`/housing/${logement.id}`}>
        <Card cover={logement.cover} title={logement.title} />
      </Link>
    )
  })}
</section>

    </>
  );
}

export default Home;