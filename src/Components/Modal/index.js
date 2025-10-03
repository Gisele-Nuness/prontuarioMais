import { View, Modal, Text, Button } from "react-native";
import styles from "./style";

export default function ModalPadrao({ visible, onClose, modalMessage }) {
    if (!visible) return null;
  return (
    
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={onClose}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Fechar" color="#1600a4ff" onPress={onClose} />
          </View>
        </View>
      </Modal>
   
  );
}
