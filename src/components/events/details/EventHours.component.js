import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {EventDetailsContext} from 'services/events/EventDetails.context';
import Checkbox from 'components/Checkbox.component';

const HoursWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
`;

const HoursCheckbox = styled(Checkbox)`
  padding: 4px;
`;

const EventHours = () => {
  const {
    event: {signedUp},
    selectedHours,
    setSelectedHours
  } = useContext(EventDetailsContext);
  const getTime = t => t.match(/\d\d:\d\d/g)[0];
  const handleHoursChange = (hour, index) => {
    setSelectedHours(prev =>
      prev.map(h =>
        h.id === hour.id ? {...hour, signedUp: !hour.signedUp} : h
      )
    );
  };

  return (
    <HoursWrapper>
      {selectedHours.map((h, i) => (
        <HoursCheckbox
          key={h.id}
          checked={h.signedUp}
          disabled={signedUp}
          onPress={() => handleHoursChange(h, i)}
          label={`${getTime(h.fromHour)} - ${getTime(h.toHour)}`}
        />
      ))}
    </HoursWrapper>
  );
};

export default EventHours;
