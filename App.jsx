import ForeignerHeader from '@components/common/ForeignerHeader';
import HomeHeader from '@components/common/header/HomeHeader';
import SeniorHeader from '@components/common/SeniorHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FaceRecognition from '@screens/FaceRecognition';
import ForeignerHome from '@screens/ForeignerHome';
import Home from '@screens/Home';
import Information from '@screens/Information';
import SeniorHome from '@screens/SeniorHome';
import YoungmanHome from '@screens/YoungmanHome';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import theme from 'styles/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="information" component={Information} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={Home} options={{ header: () => <HomeHeader /> }} />
            <Stack.Screen name="camera" component={FaceRecognition} />
            <Stack.Screen name="seniorHome" component={SeniorHome} options={{ header: () => <SeniorHeader /> }} />
            <Stack.Screen name="youngmanHome" component={YoungmanHome} options={{ header: () => <HomeHeader /> }} />
            <Stack.Screen
              name="foreignerHome"
              component={ForeignerHome}
              options={{ header: () => <ForeignerHeader /> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}
