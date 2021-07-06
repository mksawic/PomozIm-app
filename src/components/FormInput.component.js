import React, {forwardRef} from 'react';
import styled from 'styled-components/native';
import Input from 'components/Input.component';
import Text from 'components/Text.component';

const StyledInput = styled(Input)`
  align-items: flex-start;
  margin-top: 10px;
  ${({error, theme}) => error && `border: 2px solid ${theme.colors.primary};`}
`;

const FormInput = forwardRef((props, ref) => (
  <>
    <StyledInput ref={ref} {...props} />
    {props.error && <Text color="primary">{props.error}</Text>}
  </>
));

export default FormInput;
