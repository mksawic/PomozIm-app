import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from 'components/Text.component';
import styled, {css} from 'styled-components/native';
import {View, Linking, Image, TouchableOpacity, ScrollView} from 'react-native';
import Button from 'components/Button.component';
import {Feather} from '@expo/vector-icons';
import {AboutContext} from 'services/about/About.context';

const Wrapper = styled(ScrollView)`
  padding: 16px;
  margin-top: ${({insets}) => insets.top}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const SocialWrapper = styled(View)`
  margin-bottom: 30px;
  justify-content: center;
  ${({about}) =>
    about &&
    css`
      align-items: center;
    `}
  ${({info}) =>
    info &&
    css`
      margin-top: 10px;
      flex-direction: row;
      margin-bottom: 5px;
      align-items: center;
    `}
    ${({links}) =>
    links &&
    css`
      align-self: center;
      width: 80%;
    `}
`;

const InfoTab = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

const SocialButton = styled(Button)`
  margin-left: 6px;
  margin-right: 6px;
`;

const AboutText = styled(Text)`
  text-align: center;
`;

const LinkText = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;

const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 24px;
  margin-right: 8px;
`;

const Banner = styled(Image).attrs(() => ({resizeMode: 'contain'}))`
  width: 100%;
  height: 140px;
`;

const AboutView = () => {
  const insets = useSafeAreaInsets();
  const {
    youtube,
    instagram,
    linkedin,
    facebook,
    website,
    mail,
    phone,
    map
  } = useContext(AboutContext);

  return (
    <Wrapper insets={insets}>
      <Banner source={require('../../assets/banner.png')} />
      <AboutText variant="h2">O Nas!</AboutText>

      <SocialWrapper about>
        <AboutText>
          Hospicjum, co może dziwić, to miejsce… pełne życia! Do domów naszych
          dzieci zanosimy oprócz specjalistycznej opieki – ciepło, troskę i
          nadzieję. Może się wydawać, że hospicjum to smutek, ale uśmiechy
          naszych podopiecznych potwierdzają, że jest inaczej...
        </AboutText>
        <InfoTab onPress={() => Linking.openURL(website)}>
          <SocialWrapper info>
            <Icon name="globe" />
            <LinkText variant="link">Dowiedz się wiecej!</LinkText>
          </SocialWrapper>
        </InfoTab>
      </SocialWrapper>

      <AboutText variant="h2">Skontaktuj się z Nami!</AboutText>

      <SocialWrapper links>
        <InfoTab onPress={() => Linking.openURL(map)}>
          <SocialWrapper info>
            <Icon name="map-pin" />
            <LinkText variant="link">
              Konstantego Ciołkowskiego 88J,{'\n'}
              15-545 Białystok
            </LinkText>
          </SocialWrapper>
        </InfoTab>
        <InfoTab onPress={() => Linking.openURL(`mailto:${mail}`)}>
          <SocialWrapper info>
            <Icon name="inbox" />
            <LinkText variant="link">{mail}</LinkText>
          </SocialWrapper>
        </InfoTab>
        <InfoTab onPress={() => Linking.openURL(`tel:${phone}`)}>
          <SocialWrapper info>
            <Icon name="phone" />
            <LinkText variant="link">{phone}</LinkText>
          </SocialWrapper>
        </InfoTab>
      </SocialWrapper>

      <AboutText variant="h2">Zajrzyj na nasze Social Media!</AboutText>
      <SocialWrapper>
        <SocialWrapper info>
          <SocialButton
            icon="facebook"
            onPress={() => Linking.openURL(facebook)}
          />
          <SocialButton
            icon="linkedin"
            onPress={() => Linking.openURL(linkedin)}
          />
          <SocialButton
            icon="youtube"
            onPress={() => Linking.openURL(youtube)}
          />
          <SocialButton
            icon="instagram"
            onPress={() => Linking.openURL(instagram)}
          />
        </SocialWrapper>
      </SocialWrapper>
    </Wrapper>
  );
};

export default AboutView;
