import React, { useEffect } from 'react';
import { BASE_URL } from './App'

export const AdsList = () => {
  const ADS_URL = `${BASE_URL}/ads`
  const [ ads, setAds ] = useState([]);
  
  useEffect(() => {
    fetch(ADS_URL)
      .then((res) => res.json())
      .then((json) => setAds(json.results))
  }, [ADS_URL]);
  
  return (
    <section className='movies-list'> 
      {ads.map(ad =>
        <AdCard {...ad} key={ad.id} />)
      }
    </section>
  );
}