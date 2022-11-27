import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './MainMenu';
import Feature_1 from './Feature_1';
import Feature_2 from './Feature_2';
import Feature_3 from './Feature_3';
import Feature_4 from './Feature_4';
import Game_1 from './Game_1';
import Game_2 from './Game_2';
import Game_3 from './Game_3';
import Game_3_EasyMode from './Game_3_EasyMode';
import Game_3_HardMode from './Game_3_HardMode';
import Game_3_Score from './Game_3_Score';

const Stack = createStackNavigator();

export default function App() {

  return ( 

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {header: () => null}
        }>
        <Stack.Screen
          name='MainMenu'
          component={MainMenu}
        />
        <Stack.Screen
          name='Feature_1'
          component={Feature_1}
        />
        <Stack.Screen
          name='Feature_2'
          component={Feature_2}
        />
        <Stack.Screen
          name='Feature_3'
          component={Feature_3}
        />
        <Stack.Screen
          name='Feature_4'
          component={Feature_4}
        />
        <Stack.Screen
          name='Game_1'
          component={Game_1}
        />
        <Stack.Screen
          name='Game_2'
          component={Game_2}
        />
        <Stack.Screen
          name='Game_3'
          component={Game_3}
        />
        <Stack.Screen
          name='Game_3_EasyMode'
          component={Game_3_EasyMode}
        />
        <Stack.Screen
          name='Game_3_HardMode'
          component={Game_3_HardMode}
        />
        <Stack.Screen
          name='Game_3_Score'
          component={Game_3_Score}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
