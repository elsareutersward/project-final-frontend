import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { user } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { BASE_URL } from '../App';
import { useHistory } from 'react-router-dom';
import { Form, TextInput, TextAreaInput, RadioInput, Dropdown } from '../lib/FormsInputs';
import { SignButton } from '../lib/Buttons';

export const CreateAd = () => {
  const CREATE_URL = `${BASE_URL}/posts`;
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [delivery, setDelivery] = useState('');
  const [category, setCategory] = useState('');
  const fileInput = useRef();


  const submitAd = (event) => {
    event.preventDefault();
    const seller = userId;
    const formData = new FormData();
    formData.append('image', fileInput.current.files[0]);
    formData.append('title', title);
    formData.append('info', info);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('location', location);
    formData.append('delivery', delivery);
    formData.append('seller', seller);

    fetch(CREATE_URL, {
      method: 'POST',
      headers: { Authorization: accessToken },
      body: formData,
    })
      .then((res) => {
        if (res.ok) { return res.json() }
        throw new Error('Could not create ad. Please try again.');
      })
      .then((json) => {
        swal('Great work!', 'Your post was successfully created! Here is a preview of your post!', 'success');
        history.push(`/posts/${json._id}`);
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };

  return (
    <Form onSubmit={submitAd} height={'auto'} width={'60%'} font={'19px'}>
      <Title>Fill in the form below to create a post: </Title>
      <FormContentHolder> 
        <SectionDevider>
          <label>
            <TextInput 
              border={'#f1f1f1 3px solid'} 
              backgroundColor={'#f1f1f1'}
              type='text'
              placeholder='Title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              />
          </label>
          <label>
            <TextAreaInput
              placeholder='Info'
              value={info}
              onChange={(event) => setInfo(event.target.value)}
              required
              />
          </label>
          <label>
            <TextInput
              border={'#f1f1f1 3px solid'} 
              backgroundColor={'#f1f1f1'}
              type='Number'
              placeholder='Price'
              min="0"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
              />
          </label>
        </SectionDevider>
        <SectionDevider>
          <label>
            <TextInput 
              border={'none'}
              borderBottom={'none'} 
              type="file" 
              ref={fileInput} 
              />
          </label>
          <label>
            <TextInput
              border={'#f1f1f1 3px solid'} 
              backgroundColor={'#f1f1f1'}
              type='String'
              placeholder='Location'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
              />
          </label>
          <Text>Choose a delivery option:</Text>
          <label>
            <RadioInput
              type='radio'
              name='delivery'
              value='Product can be shipped'
              onChange={(event) => setDelivery(event.target.value)}
              checked={delivery === 'Product can be shipped'}
              />
            Product can be shipped
          </label>
          <label>
            <RadioInput
              type='radio'
              name='delivery'
              value='Only pickup, no shipping'
              onChange={(event) => setDelivery(event.target.value)}
              checked={delivery === 'Only pickup, no shipping'}
              />
            Only pickup, no shipping
          </label>
          <label>
            <Dropdown 
              value={category}
              onChange={event => setCategory(event.target.value)}
              >
              <option value=''>Choose a category</option>
              <option value='clothes'>Clothes</option>
              <option value='shoes'>Shoes</option>
              <option value='furniture'>Furniture</option>
              <option value='home'>Home ware</option>
              <option value='books'>Books</option>
              <option value='toys'>Toys</option>
              <option value='sport'>Sport gear</option>
            </Dropdown>
          </label>
        </SectionDevider>
      </FormContentHolder>
      <SignButton type='submit'>Create ad</SignButton>
    </Form>
  );
};

const Title = styled.h1`
  font-size: 30px;
  font-weight: lighter;

  @media (max-width: 769px) {
    font-size: 26px;
    text-align: center;
  }
`;
const FormContentHolder = styled.section`
  display: flex;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const SectionDevider = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media (max-width: 769px) {
    margin: 0px;
    width: 100%;
  }
`;
const Text = styled.label`
  margin-left: 10px;
  font-size: 20px;

  @media (max-width: 769px) {
    font-size: 18px;
  }
`;

