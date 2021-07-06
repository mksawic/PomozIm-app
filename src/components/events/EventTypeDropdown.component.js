import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Dropdown from 'components/Dropdown.component';
import Text from 'components/Text.component';
import {theme} from 'styles/theme';

const EventTypeDropdown = props => (
  <Dropdown {...props} searchable={false} {...additionalProps(props)} />
);

const additionalProps = props => ({
  listMode: 'MODAL',
  flatListProps: {
    contentContainerStyle: {
      flexGrow: 0,
      padding: 8
    }
  },
  modalContentContainerStyle: styles.modalContainer,
  searchContainerStyle: styles.searchContainer,
  CloseIconComponent: () => <Text variant="label">Anuluj</Text>,
  modalProps: {
    animationType: 'slide',
    transparent: true,
    presentationStyle: '',
    onRequestClose: () => props.setOpen(false),
    visible: props.open
  }
});

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: '30%',
    height: 320,
    width: '80%',
    left: '10%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.textDark,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#FFF',
    flexDirection: 'column-reverse',
    paddingVertical: 10
  },
  searchContainer: {
    justifyContent: 'center',
    borderBottomWidth: 0
  }
});

export default EventTypeDropdown;
