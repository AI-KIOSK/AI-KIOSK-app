import HomeHeader from '@components/common/HomeHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';
import Information from '@screens/Information';
import SeniorHome from '@screens/SeniorHome';
import React from 'react';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="information" component={Information} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={Home} options={{ header: () => <HomeHeader /> }} />
          <Stack.Screen name="seniorHome" component={SeniorHome} options={{ header: () => <HomeHeader /> }} />          
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
