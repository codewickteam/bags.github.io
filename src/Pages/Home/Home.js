import React from 'react';
import './home.css';
import Slider from '../../Components/Home/Slider/Slider.js';
import Banner from '../../Components/Home/Banner/Banner.js';
import Banner2 from '../../Components/Home/Banner/Banner2.js';
import Header from '../../Components/Home/Header/Header.js';
import TopPick from '../../Components/Home/TopPicks/TopPick.js';
import Feature2 from '../../Components/Home/Features/Feature2.js';
import data1 from '../../Assets/Data.json';
import {data} from '../../API/data';

const Home = () => {
  return (
    <div className="homeContainer">
      <Slider />
      <span className="topPick">TopPicks</span>
      <Header item={`Trending What's New`} />
      <TopPick data={data} />

    <Header item={`Top Backpack`}/>
    <TopPick data={data.filter(item => item.category === 'Backpack')} 
    FeatureData={data1.featurestopicksBackpacks}/>

      <Header item={`Top Luggage`} />
      <TopPick
        data={data.filter(item => item.category === 'Luggage')}
        FeatureData={data1.featurestopicksBackpacks}
      />

      <Header item={`Top Duffle`} />
      <TopPick
        data={data.filter(item => item.category === 'Duffels')}
        FeatureData={data1.featurestopicksBackpacks}
      />

      <Header item={`Occasion`} />
      <Banner data={data1.slider} />
      <Header item={`Categories`} />
      <Banner data={data1.slider} />
      <div className="feature2">
        {data1.features2topicksBackpacks.map((items) => (
          <Feature2
            id={items.id}
            image={items.image}
            description={items.description}
          />
        ))}
      </div>

      <div className="instagramHeader">
        Follow Us {<img src={data1.instagram} alt="insta"></img>}@Instagtam
      </div>

      <div className="banner2">
        {data1.banner2topicks.map((items) => (
          <Banner2
            id={items.id}
            image={items.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
