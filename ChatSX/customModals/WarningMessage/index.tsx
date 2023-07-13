import {View, Text, Modal, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {
  CONFIRM_BUTTON,
  CANCEL_BUTTON,
} from '../../constants/Strings';

const WarningMessageModal = ({
  hideWarningAlert,
  warningMessageModalState,
  warningMessage,
  leaveChatroom
}: any) => {
  return (
    <Modal
      visible={warningMessageModalState}
      animationType="fade"
      transparent={true}
      onRequestClose={hideWarningAlert}>
      <Pressable style={styles.modal} onPress={hideWarningAlert}>
        <Pressable onPress={() => {}} style={styles.modalContainer}>
        <Text style={styles.title}>
            {warningMessage}
        </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={hideWarningAlert}>
              <Text style={[styles.buttonText, styles.cancelButtonText]}>
                {CANCEL_BUTTON}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.okButton]}
              onPress={() => {
                leaveChatroom();
                hideWarningAlert();
              }}>
              <Text style={styles.buttonText}>{CONFIRM_BUTTON}</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default WarningMessageModal;
