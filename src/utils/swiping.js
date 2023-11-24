import { Platform, StyleSheet, Text, View, useColorScheme, Image, Alert, Dimensions, ScrollView, Modal, TextInput, TouchableOpacity, ActivityIndicator, Pressable, ImageBackground, Animated, I18nManager } from 'react-native';
import React from 'react';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons } from './icons';

I18nManager.allowRTL(true)
const Swipe = ({ children, item, deleteItem, editItem}) => { 
    var swapRef;

    const RightDeleteActions = (bgColor, type, x, progress, item) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={[{ flex: 1, justifyContent: 'center' }, { transform: [{ translateX: trans }] }]}>
                <RectButton onPress={() => _removeExpenses(item)} style={[styles.rightAction, { backgroundColor: bgColor }]}>
                    <Ionicons name="ios-trash-outline" size={20} color="#fff" />
                </RectButton>
            </Animated.View>
        );
    };

    const RightEditActions = (bgColor, type, x, progress, item) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={[{ flex: 1, justifyContent: 'center' }, { transform: [{ translateX: trans }] }]}>
                <RectButton onPress={() => _editExpenses(item)} style={[styles.rightAction, { backgroundColor: bgColor }]}>
                    <Ionicons name="ios-pencil" size={20} color="#fff" />
                </RectButton>
            </Animated.View>
        );
    }; 

    const _removeExpenses = (item) => {
        deleteItem(item);
        swapRef.close();
    }
    const _editExpenses = (item) => { 
        editItem(item);
        swapRef.close();
    }

    const updateRef = (ref) => {
        swapRef = ref;
    };

    const renderRightActions = (progress, item) => (
        <View style={{ width: 100, flexDirection: 'row' }}>
            {RightEditActions('#1EC677', 'edit', 100, progress, item)}
            {RightDeleteActions('red', 'delete', 50, progress, item)} 
        </View>
    );

    return (
        <Swipeable
            ref={updateRef}
            friction={2}
            leftThreshold={30}
            rightThreshold={40}
            renderRightActions={progress => renderRightActions(progress, item)}
        >
            {children}
        </Swipeable>
    )
}

export default Swipe

const styles = StyleSheet.create({
    leftAction: {
        backgroundColor: '#497AFC',
        justifyContent: 'center',
        width: 60,
        height: 64,
        alignItems: 'center',
    },
    rightAction: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: 60,
        // height: 64,
        flex: 1
    },
}); 