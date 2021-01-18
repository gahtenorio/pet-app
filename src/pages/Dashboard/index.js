import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather'

import {
  Container,
  Area,
  Header,
  Title,
  Description,
  Button,
  ButtonText,
  TextArea,
  TitleDashboard,
  DescriptionDashboard,
  InputArea,
  Input,
  PetsArea,
  Pet,
  PetName,
  PetAge,
  Contact,
  NewPet,
  PetInfo
} from './styles';

import logoImg from '../../assets/logo.png';
import menuImg from '../../assets/menu.png';
import iconImg from '../../assets/icon.png';

import busterImg from '../../assets/buster.png';
import codyImg from '../../assets/cody.png';
import caseyImg from '../../assets/casey.png';


export default function Dashboard() {
  const [dashboard, setDashboard] = useState(false);

  if (dashboard) {
    return (
      <Container>
        <Header>
          <Image
            source={menuImg}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={iconImg}
            style={{ width: 30, height: 30 }}
          />
        </Header>

        <TextArea>
          <TitleDashboard>Adopt</TitleDashboard>
          <DescriptionDashboard>Your favorite animal</DescriptionDashboard>
        </TextArea>

        <InputArea>

          <Input
            placeholder='Search'
            placeholderTextColor='#afafaf'
          />
          <Feather
            name='search'
            size={20}
            color='#afafaf'
            style={{ position: 'absolute', left: 50, top: '50%' }}
          />
        </InputArea>

        <Text style={{
          marginTop: 30,
          marginBottom: 20,
          marginLeft: 25,
          fontSize: 20,
          fontWeight: 'bold'
        }} >Recommended</Text>

        <PetsArea>
          <Pet>
            <Image
              source={busterImg}
            />

            <PetName>Buster</PetName>
            <PetAge>2 year old</PetAge>

            <Contact>
              <Feather name='phone' color='#808080' size={20} style={{ marginRight: 10 }} />
              <Feather name='mail' color='#808080' size={20} />
            </Contact>
          </Pet>

          <Pet>
            <Image
              source={codyImg}
            />

            <PetName>Cody</PetName>
            <PetAge>2 year old</PetAge>

            <Contact>
              <Feather name='phone' color='#808080' size={20} style={{ marginRight: 10 }} />
              <Feather name='mail' color='#808080' size={20} />
            </Contact>
          </Pet>
        </PetsArea>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 25,
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >New pets</Text>

        <Text
          style={{
            marginLeft: 25,
            marginTop: 5,
            fontSize: 16,
            maxWidth: 300
          }}
        >Find you best friend and give them a new home
        </Text>

        <NewPet>
          <PetInfo>
            <PetName>Casey</PetName>
            <PetAge>1 years old</PetAge>
            <Contact>
              <Feather name='phone' color='#808080' size={20} style={{ marginRight: 10 }} />
              <Feather name='mail' color='#808080' size={20} />
            </Contact>
          </PetInfo>
          <Image
            source={caseyImg}
          />
        </NewPet>
      </Container>
    );
  }

  return (
    <Container>
      <Area>
        <Title>Welcome</Title>
        <Description>Find the best pet near you and adapt your favourite one</Description>

        <Image
          source={logoImg}
          style={{ width: 300, height: 300 }}
          resizeMode='contain'
        />

        <Button
          onPress={() => setDashboard(true)}
        >
          <ButtonText>Let's Start</ButtonText>
        </Button>
      </Area>
    </Container>
  );
} 