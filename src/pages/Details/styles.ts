import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #15151c;
`;

export const Content = styled.ScrollView`
  padding: 32px;
`;

export const MovieImage = styled.Image`
  width: 70%;
  aspect-ratio: ${2 / 3};
  border-radius: 8px;
  background-color: #ddd1;
`;

export const MovieTitle = styled.Text`
  text-align: center;
  color: #949398;
  font-size: 30px;
  font-weight: bold;
  margin-top: 8px;
`;

export const DescriptionSection = styled.View`
  width: 100%;
`;

export const DescriptionTitleText = styled.Text`
  color: #949398;
  font-size: 17px;
  font-weight: bold;
  margin-top: 32px;
`;

export const DescriptionText = styled.Text`
  color: #ddd;
  line-height: 20px;
  text-align: justify;
  margin-top: 16px;
`;