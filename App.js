import React, {Component} from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import SplashScreen from './src/Screens/SplashScreen/index';
import LoginOptions from './src/Screens/Login/index';
import LoginScreen from './src/Screens/Login/LoginScreen';
import SignUpScreen from './src/Screens/SignUp/index';
import Tabs from './src/Screens/Tabs/index';

const RootStack = createStackNavigator({
    splashScreen: {
        screen: SplashScreen,
    },
    loginOption: {
        screen: LoginOptions
    },
    login: {
        screen: LoginScreen
    },
    signUp: {
        screen: SignUpScreen
    },
    tab: {
        screen: Tabs
    }
});

const App = createAppContainer(RootStack);

export default App;