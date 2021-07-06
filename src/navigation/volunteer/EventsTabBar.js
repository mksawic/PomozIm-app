import React from 'react';
import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import Text from 'components/Text.component';

const TabBarWrapper = styled.View(
  ({theme}) => css`
    width: 100%;
    height: 60px;
    flex-direction: row;
    background-color: ${theme.colors.white};
  `
);

const TabBarTouchable = styled.TouchableOpacity(
  ({theme, isFocused, isSettings}) => css`
    justify-content: center;
    align-items: center;
    flex: ${isSettings ? 1 : 2};
    border-bottom-width: 3px;
    border-bottom-color: ${isFocused ? theme.colors.primary : '#DDD'};
  `
);

const TabBarIcon = styled(Feather).attrs(({theme, isFocused}) => ({
  color: isFocused ? theme.colors.primary : theme.colors.gray
}))``;

const TabBarText = styled(Text).attrs(({theme, isFocused}) => ({
  color: isFocused ? 'primary' : 'gray',
  variant: 'label'
}))``;

const EventsTabBar = ({state, descriptors, navigation, position}) => (
  <TabBarWrapper>
    {state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;
      const isFocused = state.index === index;
      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };
      const isSettings = label === 'Settings';

      return (
        <TabBarTouchable
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          isFocused={isFocused}
          isSettings={isSettings}>
          {isSettings ? (
            <TabBarIcon name="settings" size={28} isFocused={isFocused} />
          ) : (
            <TabBarText isFocused={isFocused}>{label}</TabBarText>
          )}
        </TabBarTouchable>
      );
    })}
  </TabBarWrapper>
);

export default EventsTabBar;
