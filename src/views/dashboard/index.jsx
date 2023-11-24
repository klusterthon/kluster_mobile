import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {custom_styles, primary_color} from '../../utils/custom_style';
import {FlatList} from 'react-native-gesture-handler';

const generateInitialDates = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const initialDates = [];
  for (let i = 0; i < MAX_DATES; i++) {
    const date = new Date(yesterday);
    date.setDate(yesterday.getDate() - i);
    initialDates.push(date);
  }
  return initialDates.reverse();
};
function formatDateToDayOfWeek(date) {
  const options = {weekday: 'short'};
  const dayOfWeek = date.toLocaleDateString('en-US', options);
  return dayOfWeek.slice(0, 3);
}

const MAX_DATES = 6;
export default function HomeScreen({navigation}) {
  const {colors} = useTheme();
  const [dates, setDates] = useState(generateInitialDates());
  const [selectedDate, setSelectedDate] = useState(null);

  const DateCom = ({item, isSelected, setSelectedDate}) => (
    <TouchableOpacity
      onPress={() => setSelectedDate(item)}
      style={[styles.dateCon, isSelected && styles.selectedDateCon]}>
      <Text
        style={[custom_styles.h3, {color: isSelected ? '#fff' : colors.text}]}>
        {formatDateToDayOfWeek(item)}
      </Text>
      <Text
        style={[custom_styles.h3, {color: isSelected ? '#fff' : colors.text}]}>
        {item?.getDate()}
      </Text>
    </TouchableOpacity>
  );

  const addNewDate = () => {
    try {
      var oldDatas = dates;
      const date = new Date(dates[5]);
      date.setDate(new Date(dates[5]).getDate() + 1);
      oldDatas = [...oldDatas, date];
      oldDatas.shift();
      setDates(oldDatas);
    } catch (error) {
      console.log(error);
    }
  };

  const removeDate = () => {
    try {
      var oldDatas = dates;
      const date = new Date(dates[0]);
      date.setDate(new Date(dates[0]).getDate() - 1);
      oldDatas = [date, ...oldDatas];
      oldDatas.pop();
      setDates(oldDatas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View
            style={[
              custom_styles.card_list_circle,
              {backgroundColor: '#E1E1E1', borderRadius: 45, marginRight: 10},
            ]}
          />
          <View>
            <Text style={[custom_styles.h4, {color: colors.text}]}>
              Hello {dates?.length}
            </Text>
            <Text style={[custom_styles.h2, {color: colors.text}]}>
              Jane David
            </Text>
          </View>
        </View>
        <View>
          <SvgXml
            xml={`<svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16992 19.5449C2.16992 20.0033 2.32747 20.3721 2.64258 20.6514C2.96484 20.9235 3.40527 21.0596 3.96387 21.0596H8.38965C8.41829 21.7542 8.61165 22.3988 8.96973 22.9932C9.33496 23.5947 9.82552 24.0781 10.4414 24.4434C11.0645 24.8158 11.7806 25.002 12.5898 25.002C13.4062 25.002 14.1224 24.8158 14.7383 24.4434C15.3613 24.0781 15.8519 23.5947 16.21 22.9932C16.5752 22.3988 16.7721 21.7542 16.8008 21.0596H21.2266C21.7852 21.0596 22.222 20.9235 22.5371 20.6514C22.8594 20.3721 23.0205 20.0033 23.0205 19.5449C23.0205 19.1654 22.9202 18.8037 22.7197 18.46C22.5192 18.109 22.2614 17.7725 21.9463 17.4502C21.6383 17.1279 21.3232 16.8092 21.001 16.4941C20.7503 16.2507 20.5534 15.932 20.4102 15.5381C20.2741 15.1442 20.1702 14.7109 20.0986 14.2383C20.027 13.7656 19.9697 13.2822 19.9268 12.7881C19.8838 11.4346 19.7119 10.235 19.4111 9.18945C19.1175 8.14388 18.6735 7.2666 18.0791 6.55762C17.4919 5.84863 16.7292 5.32585 15.791 4.98926C15.5905 4.28027 15.2074 3.68587 14.6416 3.20605C14.0758 2.72624 13.3919 2.48633 12.5898 2.48633C11.7949 2.48633 11.1146 2.72624 10.5488 3.20605C9.98307 3.68587 9.59993 4.28027 9.39941 4.98926C8.46126 5.32585 7.69499 5.84863 7.10059 6.55762C6.51335 7.2666 6.06934 8.14388 5.76855 9.18945C5.47493 10.235 5.30664 11.4346 5.26367 12.7881C5.2207 13.2822 5.16341 13.7656 5.0918 14.2383C5.02018 14.7109 4.91276 15.1442 4.76953 15.5381C4.63346 15.932 4.4401 16.2507 4.18945 16.4941C3.86719 16.8092 3.5485 17.1279 3.2334 17.4502C2.92546 17.7725 2.67122 18.109 2.4707 18.46C2.27018 18.8037 2.16992 19.1654 2.16992 19.5449ZM4.7373 19.0938V18.9648C4.8304 18.8717 4.95573 18.7464 5.11328 18.5889C5.27083 18.4313 5.44271 18.2594 5.62891 18.0732C5.8151 17.8799 5.99414 17.6829 6.16602 17.4824C6.35221 17.2747 6.51335 17.0241 6.64941 16.7305C6.78548 16.4297 6.90007 16.0931 6.99316 15.7207C7.09342 15.3411 7.1722 14.9294 7.22949 14.4854C7.29395 14.0413 7.34049 13.5615 7.36914 13.0459C7.41211 11.5993 7.57682 10.4463 7.86328 9.58691C8.14974 8.72038 8.52572 8.07585 8.99121 7.65332C9.45671 7.22363 9.97949 6.93001 10.5596 6.77246C10.6885 6.74382 10.7887 6.69368 10.8604 6.62207C10.9391 6.54329 10.9821 6.43229 10.9893 6.28906C11.0179 5.74479 11.1755 5.30436 11.4619 4.96777C11.7484 4.63118 12.1243 4.46289 12.5898 4.46289C13.0697 4.46289 13.4492 4.63118 13.7285 4.96777C14.015 5.30436 14.1725 5.74479 14.2012 6.28906C14.2083 6.43229 14.2477 6.54329 14.3193 6.62207C14.3981 6.69368 14.4984 6.74382 14.6201 6.77246C15.2002 6.93001 15.723 7.22363 16.1885 7.65332C16.6611 8.07585 17.0407 8.72038 17.3271 9.58691C17.6136 10.4463 17.7783 11.5993 17.8213 13.0459C17.8499 13.5615 17.8929 14.0413 17.9502 14.4854C18.0146 14.9294 18.0934 15.3411 18.1865 15.7207C18.2796 16.0931 18.3942 16.4297 18.5303 16.7305C18.6663 17.0241 18.8275 17.2747 19.0137 17.4824C19.1927 17.6829 19.3717 17.8799 19.5508 18.0732C19.737 18.2594 19.9053 18.4313 20.0557 18.5889C20.2061 18.7464 20.3278 18.8717 20.4209 18.9648V19.0938H4.7373ZM10.4199 21.0596H14.7705C14.7275 21.7399 14.5055 22.2806 14.1045 22.6816C13.7106 23.0827 13.2057 23.2832 12.5898 23.2832C11.9883 23.2832 11.4834 23.0827 11.0752 22.6816C10.6742 22.2806 10.4557 21.7399 10.4199 21.0596Z" fill="black"/>
                        <circle cx="27" cy="4.5" r="4" fill="#D92222"/>
                        </svg>
                        `}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={[
            {width: '100%', alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Text style={[custom_styles.h2, {fontSize: 16, color: colors.text}]}>
            Today, Nov 20
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => removeDate()}
              style={{width: '10%'}}>
              <SvgXml
                xml={`<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8174 16.94L8.92738 12.05C8.34988 11.4725 8.34988 10.5275 8.92738 9.95L13.8174 5.06" stroke="#1EAFB3" stroke-width="1.656" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                `}
              />
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              {dates?.map((item, index) => (
                <DateCom
                  key={index}
                  item={item}
                  isSelected={item === selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ))}
            </View>
            <TouchableOpacity
              onPress={() => addNewDate()}
              style={{width: '10%'}}>
              <SvgXml
                xml={`<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.18262 16.94L14.0726 12.05C14.6501 11.4725 14.6501 10.5275 14.0726 9.95L9.18262 5.06" stroke="#1EAFB3" stroke-width="1.656" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                `}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={[]}
          renderItem={item => <View />}
          ListEmptyComponent={() => (
            <View
              style={{
                width: '100%',
                height: 500,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={`<svg width="343" height="189" viewBox="0 0 343 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="343" height="189" rx="12" fill="#F7FBFB"/>
                                <path d="M216.004 135.347H126.117L139.112 61.6351H229L216.004 135.347Z" fill="#CFD8DC"/>
                                <path d="M169.877 53.9999H140.461L139.112 61.635H170.594L169.877 53.9999Z" fill="#CFD8DC"/>
                                <g opacity="0.1">
                                <path d="M216.004 135.347H126.117L139.112 61.6351H229L216.004 135.347Z" fill="black"/>
                                <path d="M169.877 53.9998H140.461L139.112 61.635H170.594L169.877 53.9998Z" fill="black"/>
                                </g>
                                <path d="M137.286 57.1153C137.089 56.2711 137.089 55.3929 137.286 54.5486C137.483 55.3929 137.483 56.2711 137.286 57.1153Z" fill="#263238"/>
                                <path d="M134.673 57.8705C134.372 57.5591 134.113 57.21 133.903 56.8321C133.681 56.462 133.508 56.0655 133.386 55.652C133.688 55.9616 133.946 56.3098 134.156 56.6875C134.377 57.0589 134.55 57.4563 134.673 57.8705Z" fill="#263238"/>
                                <path d="M132.785 59.8325C131.956 59.5804 131.195 59.1414 130.563 58.5491C130.977 58.6694 131.373 58.8419 131.743 59.0625C132.121 59.2746 132.471 59.5333 132.785 59.8325Z" fill="#263238"/>
                                <path d="M132.123 62.4759C131.279 62.6726 130.401 62.6726 129.557 62.4759C130.401 62.2792 131.279 62.2792 132.123 62.4759Z" fill="#263238"/>
                                <path d="M132.89 65.0898C132.578 65.3886 132.229 65.6473 131.852 65.8598C131.482 66.0804 131.085 66.2529 130.672 66.3732C130.983 66.0728 131.332 65.8139 131.71 65.6031C132.08 65.3815 132.476 65.2089 132.89 65.0898Z" fill="#263238"/>
                                <path d="M134.849 66.975C134.598 67.8053 134.159 68.5665 133.566 69.1995C133.686 68.7854 133.86 68.3887 134.082 68.0194C134.293 67.6401 134.55 67.2892 134.849 66.975Z" fill="#263238"/>
                                <path d="M137.493 67.627C137.596 68.0469 137.645 68.4781 137.641 68.9104C137.647 69.3427 137.597 69.7741 137.493 70.1937C137.387 69.7744 137.338 69.3428 137.346 68.9104C137.341 68.4781 137.39 68.0469 137.493 67.627Z" fill="#263238"/>
                                <path d="M140.107 66.8865C140.407 67.198 140.666 67.5471 140.877 67.925C141.099 68.2944 141.271 68.6911 141.39 69.1051C140.797 68.4721 140.358 67.7109 140.107 66.8806V66.8865Z" fill="#263238"/>
                                <path d="M141.992 64.9099C142.406 65.029 142.802 65.2015 143.172 65.4232C143.55 65.634 143.899 65.8928 144.21 66.1932C143.796 66.0741 143.4 65.9016 143.03 65.6799C142.652 65.4691 142.303 65.2103 141.992 64.9099Z" fill="#263238"/>
                                <path d="M142.644 62.2665C143.489 62.0699 144.368 62.0699 145.214 62.2665C144.368 62.4631 143.489 62.4631 142.644 62.2665Z" fill="#263238"/>
                                <path d="M141.889 59.6526C142.201 59.354 142.55 59.0962 142.927 58.8855C143.296 58.6617 143.693 58.4881 144.107 58.3692C143.474 58.9623 142.713 59.4014 141.883 59.6526H141.889Z" fill="#263238"/>
                                <path d="M139.927 57.7674C140.048 57.3542 140.221 56.9578 140.44 56.5873C140.651 56.2093 140.91 55.8603 141.21 55.5488C141.091 55.9628 140.918 56.3595 140.697 56.7289C140.486 57.1068 140.227 57.4559 139.927 57.7674Z" fill="#263238"/>
                                <path d="M215.871 135.347H125.792L113 64.311H203.082L215.871 135.347Z" fill="#CFD8DC"/>
                                <path d="M144.216 107.735C146.284 107.735 147.96 106.059 147.96 103.992C147.96 101.924 146.284 100.248 144.216 100.248C142.149 100.248 140.473 101.924 140.473 103.992C140.473 106.059 142.149 107.735 144.216 107.735Z" fill="#263238"/>
                                <path d="M173.813 107.735C175.881 107.735 177.557 106.059 177.557 103.992C177.557 101.924 175.881 100.248 173.813 100.248C171.746 100.248 170.069 101.924 170.069 103.992C170.069 106.059 171.746 107.735 173.813 107.735Z" fill="#263238"/>
                                <path d="M164.393 108.334L164.186 107.942C164.169 107.906 162.233 104.331 158.342 104.331C154.802 104.331 153.917 107.697 153.893 107.842L153.787 108.269L152.928 108.063L153.031 107.632C153.031 107.591 154.088 103.446 158.342 103.446C162.767 103.446 164.883 107.364 164.971 107.532L165.178 107.921L164.393 108.334Z" fill="#263238"/>
                                </svg>
                                `}
              />
              <Text
                style={[
                  custom_styles.h4,
                  {fontSize: 16, color: colors.text, textAlign: 'center'},
                ]}>
                Your medications will be diplayed here, add medicine to get
                started
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}
                style={[
                  custom_styles.button,
                  {
                    marginTop: '40%',
                  },
                ]}>
                <SvgXml
                  width={20}
                  height={20}
                  xml={` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 18V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    `}
                />
                <Text style={[custom_styles.button_text, {marginLeft: 5}]}>
                  Add medicine
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateCon: {
    width: 40,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  selectedDateCon: {
    backgroundColor: primary_color,
    borderRadius: 5,
  },
});
