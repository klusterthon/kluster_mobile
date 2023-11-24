import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../views/infomation';
import AllegiesInfoScreen from '../views/infomation/allegies';

import HomeScreen from '../views/dashboard';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} /> 
      <Stack.Screen name="AllegiesInfo" component={AllegiesInfoScreen} options={{ headerShown: false }} /> 


      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> 

    </Stack.Navigator>
  );
}

export default MyStack;