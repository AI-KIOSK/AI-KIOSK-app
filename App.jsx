import HomeHeader from '@components/common/HomeHeader';
import SeniorHeader from '@components/common/SeniorHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FaceRecognition from '@screens/FaceRecognition';
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
          <Stack.Screen name="camera" component={FaceRecognition} />
          <Stack.Screen name="seniorHome" component={SeniorHome} options={{ header: () => <SeniorHeader /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
