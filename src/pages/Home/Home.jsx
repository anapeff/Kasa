import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import imgBannerHome from '../../images/background.png';
import logements from "../../data/logements.json";
function Home() {
  return (
    <div>
      <Header/>
      <Banner
                image={imgBannerHome}
                text="Chez vous, partout et ailleurs"
            />

<div className="backCardsHome">
            
<section className="cardsPosition">
  {logements.map((logement) => {
    return (
      <Link key={logement.id} className="paddingCard" to={`/logement/${logement.id}`}>
        <Card cover={logement.cover} title={logement.title} />
      </Link>
    )
  })}
</section>
        </div>



      <Footer />
    </div>
  );
}

export default Home;