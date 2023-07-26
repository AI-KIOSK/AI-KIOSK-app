import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Information from '@screens/Information';
import React from 'react';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="information" component={Information} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
