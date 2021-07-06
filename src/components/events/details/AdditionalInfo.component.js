import React from 'react';
import styled from 'styled-components/native';
import Text from 'components/Text.component';

const Wrapper = styled.View`
  display: flex;
  min-height: 112px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
`;

const Title = styled(Text)`
  margin-bottom: 12px;
`;

const AdditionalInfo = ({title, body}) =>
  body && (
    <Wrapper>
      <Title variant="label" color="primary">
        {title}
      </Title>
      <Text color="primary">{body}</Text>
    </Wrapper>
  );

export default AdditionalInfo;
