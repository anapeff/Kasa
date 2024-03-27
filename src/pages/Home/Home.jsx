import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <div>
      <Header/>
      <h2>Accueil</h2>
      <p>Est-ce que ça marche?</p>
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;