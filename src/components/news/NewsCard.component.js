import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {
  NewsCardWrapper,
  NewsCardImage,
  NewsCardBody,
  NewsTitle
} from './News.styles';
import Text from 'components/Text.component';
import DateLabel from './DateLabel.component';

const NewsCard = ({news = {}, navigation}) => {
  const {
    title = '',
    croppedImage = 'https://via.placeholder.com/400x300.png?text=Placeholder',
    content = '',
    createdAt = new Date()
  } = news;

  return (
    <NewsCardWrapper>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('NewsDetails', {...news})}>
        <View>
          <NewsCardImage source={{uri: croppedImage}}>
            <DateLabel date={createdAt} />
          </NewsCardImage>

          <NewsCardBody>
            <NewsTitle variant="h2" color="primary">
              {title}
            </NewsTitle>
            <Text>
              {content.length < 150 ? content : content.slice(0, 150) + '...'}
            </Text>
          </NewsCardBody>
        </View>
      </TouchableNativeFeedback>
    </NewsCardWrapper>
  );
};

export default NewsCard;
