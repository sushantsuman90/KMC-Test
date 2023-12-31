/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RaiseIssue from './src/screens/RaiseIssue';
import RaiseIssueMapSelector from './src/screens/RaiseIssueMapSelector';
import HomeScreenSearch from './src/screens/HomeScreenSearch';
import EditProfile from './src/screens/ProfileEditScreen';
import LiveStreamScreen from './src/screens/LiveStreamScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import MeetAndGreetScreen from './src/screens/MeetAndGreetScreen';
import ConfirmOtp from './src/screens/ConfirmOtp';
import OnboardingScreen from './src/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  RaiseIssue: undefined;
  RaiseIssueMapSelector: undefined;
  HomeScreenSearch: undefined;
  EditProfile: undefined;
  LiveStream: undefined;
  Services: undefined;
  MeetAndGreetScreen: undefined;
  ConfirmOtp: undefined;
  OnboardingScreen: undefined;
};

function App(): React.JSX.Element {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="OnboardingScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RaiseIssue" component={RaiseIssue} />
          <Stack.Screen
            name="RaiseIssueMapSelector"
            component={RaiseIssueMapSelector}
          />
          <Stack.Screen name="HomeScreenSearch" component={HomeScreenSearch} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
          <Stack.Screen name="Services" component={ServicesScreen} />
          <Stack.Screen
            name="MeetAndGreetScreen"
            component={MeetAndGreetScreen}
          />
          <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
