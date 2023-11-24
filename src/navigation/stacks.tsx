import {createStackNavigator} from '@react-navigation/stack';

import IndexScreen from '../views/information';
import AllergiesInfoScreen from '../views/information/allergies';

import HomeScreen from '../views/dashboard';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllergiesInfo"
        component={AllergiesInfoScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
