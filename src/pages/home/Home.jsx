import React, { useState, useEffect } from 'react';
import './Home.scss';
import LogementCard from '../../components/Card/Card';
import HomeBanniere from './HomeBanniere';

function Home() {
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    fetch('logement.json')
      .then(response => response.json())
      .then(data => setLogementData(data))
      .catch(error => console.error('Erreur de chargement du fichier JSON:', error));
  }, []);

  return (
    <div className='home'>
      <HomeBanniere />
      <div className="composant-principal">
        {logementData && (
          <LogementCard
            cover={logementData.cover}
            title={logementData.title}
          />
        )}
      </div>
    </div>
  );
}

export default Home;