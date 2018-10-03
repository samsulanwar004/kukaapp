import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

//Screen
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';

//SideBar
import Drawer from '../components/Drawer';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    }
},{
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: 300
});

const StackNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login
    },
    Profile: {
        screen: Profile
    }
});

export default StackNavigator;
