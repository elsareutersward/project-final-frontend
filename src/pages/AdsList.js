import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AdCard } from '../components/AdCard';
import { Dropdown } from '../lib/FormsInputs';
import { TextInput } from '../lib/FormsInputs';

export const AdsList = ({ ADS_URL }) => {
  const [ ads, setAds ] = useState([]);
  const [ filterText, setFilterText ] = useState('');
  const [ filterCategory, setfilterCategory ] = useState('')
  
  useEffect(() => {
    fetch(ADS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error ('Unable to load content.');
      })
      .then((json) => setAds(json))
      .catch((err) => console.error(err))
  }, [ADS_URL]);

  const filterFreeSearch = (ad) => {
    const filter = filterText.toLowerCase()
    return (
      ad.title.toLowerCase().includes(filter) 
      || ad.info.toLowerCase().includes(filter) 
      || ad.location.toLowerCase().includes(filter)
    )
  }

  return (
    <section>
      <SortHolder>
        <label>
          <Dropdown 
            onChange={(event) => setfilterCategory(event.target.value)}
            value={filterCategory}
          >
            <option value=''>Search by category:</option>
            <option value='clothes'>Clothes</option>
            <option value='shoes'>Shoes</option>
            <option value='furniture'>Furniture</option>
            <option value='home'>Home ware</option>
            <option value='books'>Books</option>
            <option value='toys'>Toys</option>
            <option value='sport'>Sport gear</option>
          </Dropdown>
        </label>
        <TextInput
          background='white'
          border='none'
          borderBottom='2px solid #1fab89'
          placeholder="Search for..."
          value={filterText}
          onInput={(event) => setFilterText(event.target.value)}
       />
      </SortHolder>
      <CardHolder> 
        {ads.length < 1 ?
          <Text>No posts created yet! Create a new post or start thrifting yourself!</Text>
          :
          ads.filter(ad => filterCategory ? ad.category === filterCategory : ad)
          .filter(ad => filterFreeSearch(ad))
          .map(ad => <AdCard {...ad} key={ad._id} />)
        }
      </CardHolder>
    </section>
  );
};

const SortHolder = styled.section`
  margin: 20px 40px;
`;
const CardHolder = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 426px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Text = styled.h1`
  font-size: 24px;
  color: #1fab89;
  text-align: center;
`;