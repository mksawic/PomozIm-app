import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsList from 'views/news/NewsList.view';
import NewsDetails from 'views/news/NewsDetails.view';

const NewsStack = createStackNavigator();

const NewsStackScreen = () => (
  <NewsStack.Navigator headerMode="none">
    <NewsStack.Screen name="News" component={NewsList} />
    <NewsStack.Screen name="NewsDetails" component={NewsDetails} />
  </NewsStack.Navigator>
);

export default NewsStackScreen;
