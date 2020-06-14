import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AdCard } from '../components/AdCard'

export const AdsList = ({ ADS_URL }) => {
  const [ ads, setAds ] = useState([]);
  const [ dropdown, setDropdown ] = useState('');
  
  useEffect(() => {
    fetch(ADS_URL)
      .then((res) => res.json())
      .then((json) => setAds(json))
  }, [ADS_URL]);

  return (
    <section>
      <section>
        <label>
          <select 
            onChange={event => setDropdown(event.target.value)}
            value={dropdown}
          >
            <option value='latest'>Popular movies</option>
            <option value='oldest'>Top rated movies</option>
            <option value='now_playing'>New releases</option>
          </select>
        </label>
      </section>
      <CardHolder> 
        {ads.map(ad => 
          <AdCard {...ad} key={ad.id} />)
        }
      </CardHolder>
    </section>
  );
}

const CardHolder = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`