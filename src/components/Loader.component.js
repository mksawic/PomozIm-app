import React, {useContext} from 'react';
import {withTheme} from 'styled-components/native';
import styled from 'styled-components/native';
import {LoaderContext} from 'services/utils/Loader.context';

const StyledLoader = styled.ActivityIndicator`
  position: absolute;
  top: 50%;
  align-self: center;
  z-index: 9999;
  ${`elevation: 10;`}
`;

const Loader = ({theme}) => {
  const {loading} = useContext(LoaderContext);
  return loading ? (
    <StyledLoader size={'large'} color={theme.colors.primary} />
  ) : null;
};

export default withTheme(Loader);
