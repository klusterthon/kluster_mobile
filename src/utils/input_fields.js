import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  useColorScheme,
  Image,
  Platform,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {custom_styles, primary_color} from './custom_style';
import {checkString, numberWithCommas} from '../utils/network';
import Svg, {Circle, Rect, SvgXml} from 'react-native-svg';
import {LoadingPage, LoadingScreen} from './loading_page';
import Dropdown from './drop_down';

const GENDERS = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Rather not say', value: 'rather not say'},
];
const {width, height} = Dimensions.get('window');
const InputField = props => {
  const {
    label,
    placeholder,
    inputValue,
    type,
    editable,
    onToogleOpen,
    keyboardType = 'default',
    displayItems,
    onChangeText,
    onChangeDateValue,
    prefix = true,
  } = props;
  const [focusColor, setFocusColor] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isPickerShow, setIsPickerShow] = React.useState(false);

  const _onBlur = () => {
    setFocusColor(0);
  };
  const _onFocus = () => {
    setFocusColor(1);
  };

  if (editable === false) {
    return (
      <View
        style={[
          styles.form_group,
          {
            borderWidth: 1,
            borderColor: focusColor ? primary_color : '#EEEEEE',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
          },
        ]}>
        <View
          style={{
            width: '87%',
            height: 48,
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <Text
            style={[
              styles.form_group_label,
              {color: focusColor ? primary_color : '#545454'},
            ]}>
            {label}
          </Text>
          <TextInput
            placeholder={placeholder}
            value={inputValue}
            onChangeText={onChangeText}
            placeholderTextColor={'#AFAFAF'}
            style={styles.form_group_input}
            onFocus={_onFocus}
            onBlur={_onBlur}
            editable={editable}
            {...props}
          />
        </View>
        <View style={{width: '13%'}}>
          {/* <MaterialIcons name="lock-outline" size={20} color="#ccc" /> */}
        </View>
      </View>
    );
  }

  if (type === 'password') {
    return (
      <View
        style={[
          styles.form_group,
          {
            borderWidth: 1,
            borderColor: focusColor ? primary_color : '#EEEEEE',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 0,
          },
        ]}>
        <View
          style={{
            width: '87%',
            height: 48,
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <Text
            style={[
              styles.form_group_label,
              {color: focusColor ? primary_color : '#545454'},
            ]}>
            {label}
          </Text>
          <TextInput
            placeholder={placeholder}
            value={inputValue}
            placeholderTextColor={'#AFAFAF'}
            style={styles.form_group_input}
            onChangeText={onChangeText}
            onFocus={_onFocus}
            onBlur={_onBlur}
            editable={editable}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
        <View style={{width: '13%'}}>
          {/* <Ionicons name={secureTextEntry ? "eye-off-sharp" : "eye-sharp"} size={20} color="#1EC677" onPress={() => setSecureTextEntry(!secureTextEntry)} /> */}
        </View>
      </View>
    );
  }

  if (type === 'date') {
    return (
      <>
        <View style={[styles.form_group, {}]}>
          <Text style={[styles.form_group_label, {}]}>{label}</Text>
          <TouchableOpacity
            onPress={onToogleOpen}
            style={{
              borderWidth: 1,
              borderColor: focusColor ? primary_color : '#EEEEEE',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: '87%',
                height: 48,
                justifyContent: 'space-evenly',
                paddingLeft: 20,
              }}>
              <Text style={[custom_styles.form_group_input, {}]}>
                {inputValue ? new Date(inputValue).toDateString() : 'MM/DD/YYY'}
              </Text>
            </View>
            <View style={{width: '13%'}}>
              <SvgXml
                xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V5" stroke="#535353" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 2V5" stroke="#535353" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 9.08997H20.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.6947 13.7H15.7037" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.6947 16.7H15.7037" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.9955 13.7H12.0045" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.9955 16.7H12.0045" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.29431 13.7H8.30329" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.29431 16.7H8.30329" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                `}
              />
            </View>
          </TouchableOpacity>
        </View>
        {isPickerShow && (
          <View
            style={{
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'absolute',
              backgroundColor: '#fff',
              zIndex: 999,
            }}>
            {/* {
                            Platform.OS === 'ios' ?
                                <View style={{
                                    bottom: 0,
                                    top: 0,
                                    width: '100%',
                                    justifyContent: 'flex-end',
                                }}>
                                    <DateTimePicker
                                        value={new Date(inputValue)}
                                        mode={'date'}
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        is24Hour={true}
                                        themeVariant="dark"
                                        onChange={val => { onChangeDateValue(val); }}
                                        positiveButton={{ label: 'Confirm', textColor: 'green' }}
                                        textColor="#000"
                                        style={styles.datePicker}
                                    />
                                    <TouchableOpacity onPress={() => setIsPickerShow(false)} style={[custom_styles.button, { width: '90%', alignSelf: 'center', marginBottom: 40 }]}>
                                        <Text style={[custom_styles.button_text]}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <DateTimePicker
                                    value={new Date(inputValue)}
                                    mode={'date'}
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    is24Hour={true}
                                    themeVariant="dark"
                                    onChange={val => { onChangeDateValue(val); setIsPickerShow(false); }}
                                    textColor="#000"
                                    style={styles.datePicker}
                                />
                        } */}
          </View>
        )}
      </>
    );
  }

  if (type === 'password-option') {
    return (
      <>
        <View
          style={[
            styles.form_group,
            {
              borderWidth: 1,
              borderColor: focusColor ? primary_color : '#EEEEEE',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 0,
            },
          ]}>
          <View
            style={{
              width: '87%',
              height: 48,
              justifyContent: 'space-evenly',
              paddingLeft: 20,
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text
              style={[
                styles.form_group_label,
                {color: focusColor ? primary_color : '#545454'},
              ]}>
              {label}
            </Text>
            <TextInput
              placeholder={placeholder}
              value={inputValue}
              placeholderTextColor={'#AFAFAF'}
              style={styles.form_group_input}
              onChangeText={val => {
                setPassword(val);
                onChangeText(val);
              }}
              onFocus={_onFocus}
              onBlur={_onBlur}
              secureTextEntry={secureTextEntry}
              // {...props}
            />
          </View>
          <View style={{width: '13%'}}>
            {/* <Ionicons name={secureTextEntry ? "eye-off-sharp" : "eye-sharp"} size={20} color="#1EC677" onPress={() => setSecureTextEntry(!secureTextEntry)} /> */}
          </View>
        </View>
      </>
    );
  }

  if (type === 'select') {
    return (
      <TouchableOpacity onPress={onToogleOpen} style={[styles.form_group, {}]}>
        <Text style={[styles.form_group_label, {}]}>{label}</Text>
        <Dropdown
          label={label}
          data={[
            {label: 'Male', value: 'Male'},
            {label: 'Female', value: 'Female'},
          ]}
          onSelect={val => {
            // setSelected(val);
            // getLocationnAddress(val?.value?.location?.coordinates[0], val?.value?.location?.coordinates[1])
          }}
        />
      </TouchableOpacity>
    );
  }

  if (type === 'web-search') {
    return (
      <View
        style={[
          styles.form_group,
          {
            height: 41,
            backgroundColor: '#F8F8F8',
            flexDirection: 'row',
            borderRadius: 12,
            alignItems: 'center',
            paddingLeft: 0,
            justifyContent: 'space-between',
          },
        ]}>
        <View
          style={{
            width: 30,
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <AntDesign name="search1" size={20} color="#AFAFAF" /> */}
        </View>
        <View
          style={{
            width: '86%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder={placeholder}
            value={inputValue}
            onChangeText={onChangeText}
            placeholderTextColor={'#AFAFAF'}
            style={[
              styles.form_group_input,
              {
                height: '100%',
                backgroundColor: '#F8F8F8',
                color: '#000',
                marginTop: 0,
                padding: 0,
              },
            ]}
            onFocus={_onFocus}
            onBlur={_onBlur}
            {...props}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.form_group]}>
      <Text style={[styles.form_group_label, {}]}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChangeText}
        placeholderTextColor={'#AFAFAF'}
        style={[
          styles.form_group_input,
          {borderWidth: 1, borderColor: focusColor ? primary_color : '#EEEEEE'},
        ]}
        onFocus={_onFocus}
        onBlur={_onBlur}
        editable={editable}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form_group: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderColor: '#EEEEEE',
  },
  form_group_label: {
    fontSize: 16,
    fontFamily: 'WorkSans-SemiBold',
    color: '#545454',
    marginBottom: 10,
  },
  form_group_input: {
    width: '100%',
    height: 48,
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 4,
    top: 50,
    right: 10,
    zIndex: 5000,
  },
});

export {InputField, LoadingPage, LoadingScreen};
