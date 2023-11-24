import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { custom_styles } from '../../utils/custom_style'
import { InputField } from '../../utils/input_fields';
import { SvgXml } from 'react-native-svg';
import DatePicker from 'react-native-date-picker'

export default function IndexScreen({ navigation }) {
  const { colors } = useTheme();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={[custom_styles.h2, { color: colors.text, }]}>Let’s set up your profile</Text>
        <Text style={[custom_styles.h4, { color: colors.text, }]}>This will allow more personalization for you</Text>
      </View>
      <ScrollView style={styles.body}>
        <InputField
          label="First name*"
          placeholder=""
        />
        <InputField
          label="Last name*"
          placeholder=""
        />
        <InputField
          label="Sex*"
          placeholder=""
          type="select"
        />
        <InputField
          label="Your date of birth*"
          placeholder=""
          type="date"
          inputValue={date}
          onToogleOpen={() => setOpen(true)}
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('AllegiesInfo')}
          style={[custom_styles.button, {
            marginTop: 40
          }]}>
          <Text style={[custom_styles.button_text, { marginRight: 5 }]}>Save</Text>
          <SvgXml
            width={20}
            height={20}
            xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4302 5.92999L20.5002 12L14.4302 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `}
          />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 10,
  },
  body: {
    flex: 1,
    marginTop: 20
  }
})