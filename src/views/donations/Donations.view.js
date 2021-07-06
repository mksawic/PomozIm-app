import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import DonationCard from 'components/DonationCard.component';
import LINKS from 'services/donations/LINKS';

const Page = styled(ScrollView)`
  padding: 8px;
  margin-top: ${({insets}) => insets.top}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px; ;
`;

const DonationsView = () => {
  const insets = useSafeAreaInsets();
  return (
    <Page insets={insets}>
      <Wrapper>
        {LINKS.map((link, index) => (
          <DonationCard key={index} url={link.link} icon={link.icon} />
        ))}
      </Wrapper>
    </Page>
  );
};

export default DonationsView;
