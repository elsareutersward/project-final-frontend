import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';
import { BASE_URL } from '../App';
import { DeleteButton } from '../lib/Buttons';
import { BuyButton } from '../components/BuyButton';

export const AdDetails = () => {
  const { _id } = useParams();
  const history = useHistory();
  const AD_URL = `${BASE_URL}/posts?id=${_id}`;
  const DELETE_URL = `${BASE_URL}/posts/${_id}`;
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedInUser = useSelector((store) => store.user.login.userId);
  const [ad, setAd] = useState();

  useEffect(() => {
    fetch(AD_URL)
      .then(res => res.json())
      .then(json => setAd(json))
  }, [AD_URL, _id]);

  const handleDelete = () => {
    fetch(DELETE_URL, {
      method: 'DELETE',
      headers: { Authorization: accessToken },
    })
      .then(() => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this post!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your post has been deleted!", {
              icon: "success",
            });
          history.push('/profile')  
          } else {
            swal("Your post is safe!");
          }
        });
      });
  };

  if(!ad) {
    return <></>;
  };

  return (
    <DetailHolder>
      <Image src={ad.image} alt='Product image' />
      <InfoHolder>
        <TitleHolder>
          <div>
            <Title>{ad.title}</Title>
            <SubTitles>{ad.price} kr</SubTitles>
            <SubTitles>{ad.info}</SubTitles>
          </div>
          {loggedInUser === ad.sellerId ? 
            <DeleteButton onClick={() => handleDelete()}>🗑</DeleteButton>
            :
            null
          }
        </TitleHolder>  
        <TextHolder>
          <div>
            <Text><TextBold>Pickup location:</TextBold> {ad.location}</Text>
            <Text><TextBold>Shipping:</TextBold> {ad.delivery}</Text>
          </div>
          <div>
            <Text><TextBold>Posted:</TextBold> {moment(ad.createdAt).fromNow()}</Text>
            <Text><TextBold>Sold by:</TextBold> {ad.sellerName}</Text>
            <Text>
              <Link to={`/seller/${ad.sellerId}`}>
                Click to see more from this seller {'>'}
              </Link>
            </Text>
          </div>
        </TextHolder>
        <BuyButton title={ad.title} adId={ad._Id} seller={ad.sellerId} />
      </InfoHolder>
    </DetailHolder>
  );
}

const DetailHolder = styled.section`
  margin: 50px;
  display: flex;
`;
const Image = styled.img`
  width: 500px;
`;
const TitleHolder = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const InfoHolder = styled.section`
  width: 100%;
  background-color: #f1f1f1;
  margin: 0px 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 30px;
  color: #1fab89;
  margin: 0px; 
`;
const SubTitles = styled.h2`
  font-size: 20px; 
  font-weight: bold;
  margin: 0px;
`
const Text = styled.p`
  font-size: 18px; 
  margin: 0px;
`;
const TextBold = styled.span`
  font-size: 18px; 
  font-weight: bold;
  margin: 0px;
`;
const TextHolder = styled.section`
  display: flex; 
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0px 10px 0px;

  a, &:visited  {
    text-decoration: none;
    color: black;
  }
  a:hover{
    text-decoration: underline;
    color: #1fab89;
    cursor: pointer;
  }
`;
