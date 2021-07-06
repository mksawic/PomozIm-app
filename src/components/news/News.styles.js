import {ImageBackground, Platform, View} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text.component';

export const NewsCardWrapper = styled(View)`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;

  /* Specify shadow depending on OS (might not work on older Android)*/
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);'
    : 'elevation: 10;'}
`;

export const NewsCardImage = styled(ImageBackground).attrs(({details}) => ({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 10,
    borderTopLeftRadius: details ? 0 : 10,
    borderTopRightRadius: details ? 0 : 10
  }
}))`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const NewsCardBody = styled(View)`
  padding: 8px 16px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const NewsTitle = styled(Text)`
  margin-bottom: 8px;
`;
