import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { custom_styles, primary_color } from '../../utils/custom_style'
import { InputField } from '../../utils/input_fields';
import { SvgXml } from 'react-native-svg';
import DatePicker from 'react-native-date-picker'

export default function AllegiesInfoScreen({ navigation }) {
    const { colors } = useTheme();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);
    const [questionOne, setQuestionOne] = useState(1);
    const [questionTwo, setQuestionTwo] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        if (currentTab > 1) {
                            setCurrentTab(val => val - 1)
                            return
                        }
                        navigation.goBack()
                    }}
                >
                <SvgXml
                    xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.165 8.91833L6.08337 16L13.165 23.0817" stroke="#8E8E8E" stroke-width="1.656" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.9165 16H6.2815" stroke="#8E8E8E" stroke-width="1.656" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `}
                />
                </TouchableOpacity>
                <Text style={[custom_styles.h3, { color: colors.text }]}>Allergy information</Text>
                <View></View>
            </View>
            <ScrollView style={styles.body}>
                {
                    currentTab == 1 &&
                    <View style={{ marginTop: 20 }}>
                        <Text style={[custom_styles.h2, { color: colors.text, marginBottom: 20 }]}>Do you have any known allergy?</Text>
                        <TouchableOpacity onPress={() => setQuestionOne(1)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionOne == 1 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionOne == 1 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>Yes, I have</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setQuestionOne(2)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionOne == 2 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionOne == 2 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>No, I don’t</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setQuestionOne(3)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionOne == 3 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionOne == 3 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>I am not sure</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    currentTab == 2 &&
                    <View style={{ marginTop: 20 }}>
                        <Text style={[custom_styles.h2, { color: colors.text, marginBottom: 20 }]}>What type of allergy do you have?</Text>
                        <TouchableOpacity onPress={() => setQuestionTwo(1)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionTwo == 1 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionTwo == 1 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setQuestionTwo(2)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionTwo == 2 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionTwo == 2 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>Drugs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setQuestionTwo(3)} style={[styles.list]}>
                            <View style={[[styles.big_circle, questionTwo == 3 && { borderColor: primary_color, }]]}>
                                <View style={[styles.small_circle, questionTwo == 3 && { borderColor: primary_color, backgroundColor: primary_color }]}></View>
                            </View>
                            <Text style={[custom_styles.h3, { color: colors.text, marginLeft: 5 }]}>Others</Text>
                        </TouchableOpacity>
                    </View>
                }


                <TouchableOpacity
                    onPress={() => {
                        if (currentTab > 1) {
                            navigation.navigate('Home');
                            return
                        }
                        setCurrentTab(val => val + 1)
                    }}
                    style={[custom_styles.button, {
                        marginTop: '40%'
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        marginTop: 20
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    big_circle: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderColor: '#BCBCBC',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    small_circle: {
        width: 14,
        height: 14,
        borderRadius: 14,
        borderColor: '#BCBCBC',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})