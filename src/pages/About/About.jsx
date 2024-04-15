import React from 'react';
import Banner from '../../components/Banner/Banner';
import imgBannerAbout from '../../images/BannerAbout.png';
import Collapse from '../../components/Collapse/Collapse';
import dataAbout from '../../data/about.json';

function About() {
  return (
    <>
  
      <Banner image={imgBannerAbout} />
      <div className="About">
        {dataAbout.map(item => (
          <Collapse
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
}


export default About;