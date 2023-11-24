import React, {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    Animated,
    Text,
    View,
} from 'react-native';
import { custom_styles } from './custom_style';
import { Button } from './input_fields';

const Message = (props) => {
    const opacity = useRef(new Animated.Value(0))
        .current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(props.duration ? props.duration : 5000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            props.onHide();
        });
    }, [props.message]);

    const _getColor = (color) => {
        if (color == 'success') {
            return '#228B22';
        } else if (color == 'error') {
            return 'rgba(255,0,0, 0.75)'; // '#FF0000';
        } else if (color == 'info') {
            return '#ccc';
        } else {
            return '#fff';
        }
    }

    const _getTextColor = (color) => {
        if (color == 'success') {
            return '#fff';
        } else if (color == 'error') {
            return '#fff';
        } else if (color == 'info') {
            return '#000';
        } else {
            return '#000';
        }
    }

    if (props.type == 'copy') {
        return (
            <Animated.View
                style={{
                    opacity,
                    transform: [
                        {
                            translateY: opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-20, 0],
                            }),
                        },
                    ],
                    margin: 10,
                    marginBottom: 5,
                    backgroundColor: 'rgba(30, 198, 119, 1)',
                    padding: 15,
                    borderRadius: 8,
                    shadowColor: props.type ? _getTextColor(props.type) : '#000',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 5,
                    // elevation: 6,
                    zIndex: 100,
                    position: 'absolute',
                    top: props.position == 'top' ? 45 : undefined,
                    bottom: props.position == 'bottom' ? 70 : undefined,
                    left: props.message ? 0 : undefined,
                    right: props.message ? 0 : undefined,
                }}
            >
                <Text style={[custom_styles.h3, { color: '#fff', fontFamily: 'Switzer-Extrabold', }]}>Success</Text>
                <Text style={[custom_styles.h4, { color: '#fff', marginTop: 5 }]}>{props.message}</Text>
                <Button
                    onPress={() => props.onHide()}
                    text="Dismiss"
                    style={[custom_styles.button, { height: 40, marginTop: 10, backgroundColor: 'rgba(255, 255, 255, .2)', borderWidth: 0 }]}
                />
            </Animated.View>
        )
    }
    return (
        <Animated.View
            style={{
                opacity,
                transform: [
                    {
                        translateY: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-20, 0],
                        }),
                    },
                ],
                margin: 10,
                marginBottom: 5,
                backgroundColor: props.type ? _getColor(props.type) : 'white',
                padding: 15,
                paddingHorizontal: 20,
                borderRadius: 8,
                shadowColor: props.type ? _getTextColor(props.type) : '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 6,
                zIndex: 100,
                position: 'absolute',
                top: props.position == 'top' ? 45 : undefined,
                bottom: props.position == 'bottom' ? 70 : undefined,
                left: props.message ? 0 : undefined,
                right: props.message ? 0 : undefined,
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            {
                props.type == 'error' &&
                <FontAwesome5 name="times-circle" size={24} color="#fff" />
            }
            {
                props.type == 'success' &&
                <Feather name="check-circle" size={24} color="#fff" />
            }
            {
                props.type == 'info' &&
                <MaterialIcons name="error-outline" size={24} color="#000" />
            }
            <Text style={{
                marginLeft: 5,
                color: props.type ? _getTextColor(props.type) : '#000',
                fontFamily: 'Switzer-Bold',
                fontSize: 12,
            }}>{props.message}</Text>
        </Animated.View>
    );
};

const Notify = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        sendMe: ({ message, type, duration, position }) => {
            setMessage(message);
            setType(type);
            setDuration(duration);
            setPosition(position);
        }
    }));
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [position, setPosition] = useState('');
    const { sendHide } = props;

    if (!message) {
        return null;
    }

    return (
        <Message
            message={message}
            type={type}
            duration={duration}
            position={position}
            onHide={() => setMessage('')}
        />
    );
});

export default Notify
