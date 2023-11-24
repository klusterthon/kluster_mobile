import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {custom_styles} from './custom_style';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const {width, height} = Dimensions.get('window');
const FracModal = (props, ref) => {
  const [modalVisible, setModalVisible] = useState(false); //modalVisible,
  const slideIn = useRef(new Animated.Value(100)).current;
  const {maxHeight, setModalInVisible, children, type} = props;

  useImperativeHandle(ref, () => ({
    closeModal: () => {
      closeModal();
    },
    openModal: () => {
      openModal();
    },
  }));

  const closeModal = () => {
    Animated.timing(slideIn, {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  const openModal = () => {
    setModalVisible(true);
    slideIn.current = 100;
    Animated.timing(slideIn, {
      toValue: maxHeight,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  if (type === 'center') {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => closeModal()}
        visible={modalVisible}>
        <Pressable
          onPress={() => (maxHeight !== height ? closeModal() : {})}
          style={[
            styles.centeredView,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalView,
                {
                  width: '90%',
                  borderRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomEndRadius: 20,
                  height: 280,
                },
              ]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>
    );
  }

  return (
    <Modal
      animationType="none"
      transparent={true}
      onRequestClose={() => closeModal()}
      visible={modalVisible}>
      <Pressable
        onPress={() => (maxHeight !== height ? closeModal() : {})}
        style={styles.centeredView}>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.modalView,
              {
                borderTopRightRadius: maxHeight === height ? 0 : 20,
                borderTopLeftRadius: maxHeight === height ? 0 : 20,
                height: slideIn,
                position: 'absolute',
                // bottom: 0,
                // left: 0,
                // right: 0,
                zIndex: 10,
              },
            ]}>
            {children}
          </Animated.View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: -10,
  },
  modalView: {
    width,
    // height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
});

export default forwardRef(FracModal);
