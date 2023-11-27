import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './HomeScreen';
import SupportScreen from './SupportScreen';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Index">
                <HomeScreen />
            </Stack.Screen>
            <Stack.Screen name="CreateMedicine">
                
            </Stack.Screen>
            <Stack.Screen name="Support">
                <SupportScreen />
            </Stack.Screen>
        </Stack.Navigator>
    );
}
