import React, {useContext} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {AlertContext} from 'services/utils/Alert.context';
import Text from 'components/Text.component';
import Button from 'components/Button.component';
import {LoaderContext} from 'services/utils/Loader.context';

const ModalWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.secondary};
  border: 3px solid ${({theme}) => theme.colors.primary};
`;

const ModalContent = styled.View`
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 24px 18px;
`;
const ModalScrollView = styled.ScrollView`
  min-height: 10%;
  max-height: 90%;
`;

const ModalBody = styled(Text)`
  font-size: 20px;
  text-align: center;
`;

const ModalButton = styled(Button)`
  margin-top: 24px;
  width: 50%;
`;

const Alert = () => {
  const {isVisible, setIsVisible, message} = useContext(AlertContext);
  const {loading} = useContext(LoaderContext);

  return (
    <View>
      <Modal
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={isVisible && !loading}>
        <ModalWrapper>
          <ModalContent>
            <ModalScrollView>
              <ModalBody>{message}</ModalBody>
            </ModalScrollView>
            <ModalButton onPress={() => setIsVisible(false)}>
              Zamknij
            </ModalButton>
          </ModalContent>
        </ModalWrapper>
      </Modal>
    </View>
  );
};

export default Alert;
