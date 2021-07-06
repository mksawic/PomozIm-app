import React from 'react';
import {Feather} from '@expo/vector-icons';
import NewsStackScreen from 'navigation/news/NewsStackScreen';
import DonationsView from 'views/donations/Donations.view';
import VolunteerStackScreen from 'navigation/volunteer/VolunteerStackScreen';
import AboutView from 'views/about/About.view';

const ROUTES = {
  news: {
    name: 'News',
    title: 'Aktualności',
    icon: ({color, size}) => <Feather name="home" color={color} size={size} />,
    component: NewsStackScreen
  },
  donations: {
    name: 'Donations',
    title: 'Wsparcie',
    icon: ({color, size}) => (
      <Feather name="credit-card" color={color} size={size} />
    ),
    component: DonationsView
  },
  volunteer: {
    name: 'Volunteer',
    title: 'Wolontariusz',
    icon: ({color, size}) => <Feather name="heart" color={color} size={size} />,
    component: VolunteerStackScreen
  },
  about: {
    name: 'About',
    title: 'O nas',
    icon: ({color, size}) => <Feather name="info" color={color} size={size} />,
    component: AboutView
  }
};

export default ROUTES;
