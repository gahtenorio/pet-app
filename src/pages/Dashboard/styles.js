import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  
  background: #D4E8DD;
  padding-top: 60px;
`;

export const Area = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: 16px;
  max-width: 250px;
  text-align: center;
  padding-bottom: 60px;
`;

export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  background: #FFF;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  margin-top: 80px;
`;

export const ButtonText = styled.Text`
  color: #399985;
  font-size: 16px;
  font-weight: bold;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  top: 40px;
  align-self: center;
  `;

export const TextArea = styled.View`
    margin-top: 40px;
    margin-left: 25px;
  `;

export const TitleDashboard = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DescriptionDashboard = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 55px;
  background: #FFF;
  align-self: center;
  margin-top: 20px;
  border-radius: 25px;
  padding: 10px;
  padding-left: 35px;
  font-size: 18px;
`;

export const PetsArea = styled.View`
  align-self: center;
  flex-direction: row;
`;

export const Pet = styled.View`
  background: #FFF;
  height: 180px;
  width: 150px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const PetName = styled.Text`
  font-weight: bold;
  align-self: flex-start;
  margin-left: 10px;
`;

export const PetAge = styled.Text`
  color: #808080;
  align-self: flex-start;
  margin-left: 10px;
`;

export const Contact = styled.View`
    flex-direction: row;
    align-self: flex-start;
    margin: 10px;
`;

export const NewPet = styled.View`
  align-self: center;
  background: #FFF;
  margin-top: 20px;
  width: 80%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 15px;
`;

export const PetInfo = styled.View`
    align-self: flex-start;
`;