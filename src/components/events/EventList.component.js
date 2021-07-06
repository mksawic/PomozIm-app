import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import EventCard from 'components/events/EventCard.component';
import EventFilters from 'components/events/EventFilters.component';

const EventsFlatList = styled(FlatList).attrs({
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

const EventList = ({
  events,
  navigation,
  isLoading,
  count,
  getEvents,
  showFilters = false,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const [page, setPage] = useState(1);
  useEffect(() => {
    page !== 1 ? getEvents(page) : null;
  }, [page, getEvents]);

  return (
    <EventsFlatList
      ListHeaderComponent={() => showFilters && <EventFilters />}
      ListHeaderComponentStyle={styles.componentHeaderStyle}
      insets={insets}
      data={events}
      renderItem={({item}) => (
        <EventCard event={item} navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparator}
      onRefresh={() => {
        setPage(1);
        getEvents();
      }}
      refreshing={isLoading}
      onEndReached={() =>
        events.length < count && setPage(prevPage => prevPage + 1)
      }
      onEndReachedThreshold={0.0001}
      removeClippedSubviews={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  componentHeaderStyle: {
    zIndex: 100,
    elevation: 11
  }
});

export default EventList;
