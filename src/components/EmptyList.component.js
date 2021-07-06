import React from 'react';
import styled from 'styled-components/native';
import Text from 'components/Text.component';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled(Text)`
  text-align: center;
`;

const EmptyList = ({text}) => (
  <Wrapper>
    <Message variant="small" color="gray">
      {text ? text : 'Lista jest pusta'}
    </Message>
  </Wrapper>
);

export default EmptyList;
