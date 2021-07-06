import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  NewsCardImage,
  NewsCardBody,
  NewsTitle
} from 'components/news/News.styles';
import Text from 'components/Text.component';
import DateLabel from 'components/news/DateLabel.component';
import Button from 'components/Button.component';

const NewsDetailsWrapper = styled(ScrollView)`
  margin-top: ${({insets}) => insets.top}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const ReturnButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const NewsDetails = ({route, navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const {
    title = '',
    croppedImage = 'https://via.placeholder.com/400x300.png?text=Placeholder',
    content = '',
    createdAt = new Date()
  } = route.params;

  return (
    <NewsDetailsWrapper insets={insets}>
      <NewsCardImage details source={{uri: croppedImage}}>
        <ReturnButton icon="arrow-left" onPress={() => goBack()} />
        <DateLabel date={createdAt} />
      </NewsCardImage>
      <NewsCardBody>
        <NewsTitle variant="h2" color="primary">
          {title}
        </NewsTitle>
        <Text>{content}</Text>
      </NewsCardBody>
    </NewsDetailsWrapper>
  );
};

export default NewsDetails;
