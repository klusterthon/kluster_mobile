import { StyleSheet, Text, View, useColorScheme, Image, Dimensions } from 'react-native';
import FracModal from './modal';
const primary_color = "#1EAFB3";

const custom_styles = StyleSheet.create({
    h1: { 
        fontSize: 24,
        fontFamily: 'WorkSans-Bold', 
    },
    h2: {
        fontSize: 18,
        fontFamily: 'WorkSans-SemiBold',
    },
    h3: { 
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
    },
    h4: {
        fontSize: 14,
        fontFamily: 'WorkSans-Regular',
    },
    money_text: {
        fontSize: 14,
        fontFamily: 'DMMono-Semibold',
    }, 
    h5: {
        fontSize: 12,
        fontFamily: 'WorkSans-Regular',
    },
    h6: {
        fontSize: 10,
        fontFamily: 'WorkSans-Regular',
    },
    button: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 10, 
        backgroundColor: primary_color,
    },
    button_text: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        color: '#FFFFFF',
    },
    form_group: {
        width: '100%',
        height: 58,
        backgroundColor: '#E2E2E2',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginVertical: 10,
    },
    form_group_label: {
        fontSize: 12,
        fontFamily: 'WorkSans-Regular',
        color: '#545454'
    },
    form_group_input: {
        fontSize: 14,
        fontFamily: 'WorkSans-Regular',
        color: '#000'
    },
    list_container: {
        width: '99%',
        alignSelf: 'center',
        height: 58, 
        borderRadius: 10,
        justifyContent: 'space-evenly', 
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#EEEEEE', 
    },
    list_container_active: {
        width: '99%',
        alignSelf: 'center',
        height: 58, 
        borderRadius: 15,
        justifyContent: 'space-evenly', 
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(30, 198, 119, 0.06)', 
    },
    list_container_label: {
        fontSize: 14,
        fontFamily: 'WorkSans-Medium',
        color: '#545454'
    },
    card:{
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: '100%',
        marginVertical: 30,
        padding: 10,
    },
    card_list:{
        width: '100%',
        height: 64,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    card_list_active:{
        width: '100%',
        height: 64,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 12,
        backgroundColor: '#F6F6F6',
    },
    card_list_circle:{
        width: 45,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_list_circle_sm:{
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_list_select_inactive:{
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1EC677',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_list_select_active:{
        width: 15,
        height: 15,
        borderRadius: 15, 
        backgroundColor: '#1EC677',
    },
    profile_container:{
        width: 28,
        height: 28,
        borderRadius: 28,
        backgroundColor: '#fefefe',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { custom_styles, FracModal, primary_color }