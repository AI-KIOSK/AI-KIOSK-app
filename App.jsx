import ForeignerHeader from '@components/common/ForeignerHeader';
import SeniorHeader from '@components/common/SeniorHeader';
import HomeHeader from '@components/common/header/HomeHeader';
import YoungmanHeader from '@components/common/header/YoungmanHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FaceRecognition from '@screens/FaceRecognition';
import ForeignerHome from '@screens/ForeignerHome';
import Home from '@screens/Home';
import Information from '@screens/Information';
import SeniorHome from '@screens/SeniorHome';
import YoungmanHome from '@screens/YoungmanHome';
import { useFonts } from 'expo-font';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import theme from 'styles/theme';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    SCDream1: require('./assets/font/SCDream1.otf'),
    SCDream2: require('./assets/font/SCDream2.otf'),
    SCDream3: require('./assets/font/SCDream3.otf'),
    SCDream4: require('./assets/font/SCDream4.otf'),
    SCDream5: require('./assets/font/SCDream5.otf'),
    SCDream6: require('./assets/font/SCDream6.otf'),
    SCDream7: require('./assets/font/SCDream7.otf'),
    SCDream8: require('./assets/font/SCDream8.otf'),
    SCDream9: require('./assets/font/SCDream9.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="information" component={Information} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={Home} options={{ header: () => <HomeHeader /> }} />
            <Stack.Screen name="camera" component={FaceRecognition} />
            <Stack.Screen name="seniorHome" component={SeniorHome} options={{ header: () => <SeniorHeader /> }} />
            <Stack.Screen name="youngmanHome" component={YoungmanHome} options={{ header: () => <YoungmanHeader /> }} />
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
