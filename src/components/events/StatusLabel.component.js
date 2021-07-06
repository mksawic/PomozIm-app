import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Feather} from '@expo/vector-icons';
import Text from 'components/Text.component';

const LabelWrapper = styled(View)`
  flex-direction: row;
  position: absolute;
  padding: 16px 16px;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 50px;
`;
const Icon = styled(Feather)`
  margin-left: 4px;
`;

const StatusLabel = () => {
  return (
    <LabelWrapper>
      <Text color="textLight" variant="label">
        Dołączono
      </Text>
      <Icon name="check" color="#FFFFFF" size={24} />
    </LabelWrapper>
  );
};

export default StatusLabel;
