import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  ScrollView
} from 'react-native';
import { SvgXml } from 'react-native-svg';
// import { Icon } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';
import { custom_styles } from './custom_style';
// interface Props {
//   label: string;
//   data: Array<{ label: string; value: string }>;
//   onSelect: (item: { label: string; value: string }) => void;
// }

const Dropdown = ({ label, location, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={[custom_styles.h4, { color: '#000' }]}>{item.label}</Text>
      {/* <Text style={[custom_styles.h5, { top: 5 }]}>{item.location}</Text> */}
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              style={{ maxHeight: 400 }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={[custom_styles.h4, { color: '#000' }]}>
        {(!!selected && selected.label) || label}
      </Text>
      {/* <Ionicons style={styles.icon} type="arrow-down" size={20} name="chevron-down" /> */}
      <SvgXml
        xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#7C7C7C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    height: 50,
    zIndex: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    // flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 0,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: .2,
    // shadowColor: '#000000',
    // shadowRadius: 4,
    // shadowOffset: { height: 4, width: 0 },
    // shadowOpacity: 0.5,
    zIndex: 999,
  },
  overlay: {
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    // borderBottomWidth: 1,
  },
});

export default Dropdown;