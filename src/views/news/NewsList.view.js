import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {NewsContext} from 'services/news/News.context';
import NewsCard from 'components/news/NewsCard.component';
import EmptyList from 'components/EmptyList.component';

const NewsList = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const {news, count, isLoading, error, page, setPage, getNews} = useContext(
    NewsContext
  );
  //TO DO: Error handling
  error ? console.log(error.toString()) : null;
  return (
    <NewsFlatList
      insets={insets}
      data={news}
      renderItem={({item}) => <NewsCard news={item} navigation={navigation} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={ItemSeparator}
      onRefresh={() => (page === 1 && !isLoading ? getNews() : setPage(1))}
      refreshing={isLoading}
      onEndReached={() =>
        news.length < count && setPage(prevPage => prevPage + 1)
      }
      onEndReachedThreshold={0.0001}
      ListEmptyComponent={<EmptyList text="Brak aktualności" />}
    />
  );
};

const NewsFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8
  }
})`
  margin-top: ${({insets}) => insets.top}px;
  background-color: white;
`;

const ItemSeparator = styled(View)`
  height: 24px;
`;

export default NewsList;
