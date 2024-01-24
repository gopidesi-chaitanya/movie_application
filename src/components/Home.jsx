import React, { useState, useEffect } from 'react';
import '../components/css/home.css';

const Home = () => {
  const [imdbData, setImdbData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const cardsData = [
    {
      url: "https://assets-in.bmscdn.com/discovery-catalog/events/et00364503-mxuscgxleq-landscape.jpg",
    },
    {
      url: "https://www.zoomnews.in/uploads_2019/newses/salaar_91883891_sm.jpg",
    },
    {
      url: "https://content.tupaki.com/en/feeds/2023/12/01/212181-animal.webp",
    },
  ];

  useEffect(async () => {
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=Salaar';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af41103b9amshbb8b086a1657af7p1313bbjsn8d2c6e1a78c2',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
      </div>

      <div className="hero-image">
        <img
          className="heroimg"
          src="https://4kwallpapers.com/images/wallpapers/mortal-kombat-2021-movies-poster-4096x1895-4902.jpg"
          alt="Hero Image"
        />
      </div>

      <div className="card-section">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.url} alt="" className="movieimg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
