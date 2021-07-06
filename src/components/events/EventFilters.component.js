import React, {useState, useContext, useEffect} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {EventContext} from 'services/events/Event.context';
import EventTypeDropdown from 'components/events/EventTypeDropdown.component';
import EventFilterDate from 'components/events/EventFilterDate.component';
import EventDatePicker from 'components/events/EventDatePicker.component';
import Text from 'components/Text.component';

const FiltersWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  height: 176px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 8px 16px 8px 16px;
`;

const EventDateWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4px;
`;
const Separator = styled.View`
  width: 16px;
`;

const EventFilters = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Wszystkie', value: ''},
    {label: 'Biurowa', value: 0},
    {label: 'Onkologia', value: 1},
    {label: 'Zadania specjalne', value: 2},
    {label: 'Akcyjny', value: 3}
  ]);

  const {filters, setFilters} = useContext(EventContext);

  const [eventType, setEventType] = useState(filters.eventType);
  const [startDate, setStartDate] = useState(filters.startDate);
  const [endDate, setEndDate] = useState(filters.endDate);

  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  useEffect(() => {
    if (eventType !== filters.eventType) {
      setFilters(f => ({...f, eventType: eventType}));
    }
    if (startDate !== filters.startDate && !showStartDate) {
      setFilters(f => ({...f, startDate: startDate}));
    }
    if (endDate !== filters.endDate && !showEndDate) {
      setFilters(f => ({...f, endDate: endDate}));
    }
  }, [
    endDate,
    eventType,
    filters.endDate,
    filters.eventType,
    filters.startDate,
    setFilters,
    showEndDate,
    showStartDate,
    startDate
  ]);

  return (
    <FiltersWrapper>
      <View>
        <Text color="textLight" variant="small">
          Rodzaj akcji
        </Text>
        <EventTypeDropdown
          open={open}
          value={eventType}
          items={items}
          setOpen={setOpen}
          setValue={setEventType}
          setItems={setItems}
        />
      </View>

      <EventDateWrapper>
        <EventFilterDate
          onPress={() => setShowStartDate(state => !state)}
          label="Od"
          date={startDate}
        />
        <Separator />
        <EventFilterDate
          onPress={() => setShowEndDate(state => !state)}
          label="Do"
          date={endDate}
        />
      </EventDateWrapper>

      {showStartDate && (
        <EventDatePicker
          value={startDate}
          setDate={setStartDate}
          setShowDate={setShowStartDate}
          maximumDate={endDate}
        />
      )}
      {showEndDate && (
        <EventDatePicker
          value={endDate}
          setDate={setEndDate}
          setShowDate={setShowEndDate}
          minimumDate={startDate}
        />
      )}
    </FiltersWrapper>
  );
};

export default EventFilters;
