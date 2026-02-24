import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// The auth screen! 
import OnboardingScreen from '@/app/onboarding/OnboardingScreen';

// login
import LoginScreen from '@/app/screens/LoginScreen';
import OtpScreen from '@/app/screens/OtpScreen';
import SelectCategoryScreen from '@/app/screens/SelectCategoryScreen';
import LocationScreen from '@/app/screens/LocationScreen';
import NotificationScreen from '@/app/screens/NotificationScreen';

// The Tab Screens
import HomeScreen from '@/app/tabs/HomeScreen';
import CartScreen from '@/app/tabs/CartScreen';
import FavouriteScreen from '@/app/tabs/FavouriteScreen';
import ProfileScreen from '@/app/tabs/ProfileScreen';



// type the screens for stack
type RootStackParamList = {
    onboarding: undefined;
    login: undefined;
    otp: undefined;
    category: undefined;
    location: undefined;
    notification: undefined;
    main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// the main tabs screen
function MainTabs() {
    return (
        <Tab.Navigator
        backBehavior='firstRoute'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                height: 84,  
            },
        }
    )}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Favourite" component={FavouriteScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='onboarding'>
            <Stack.Screen name='onboarding' component={OnboardingScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='otp' component={OtpScreen} />
            <Stack.Screen name='category' component={SelectCategoryScreen} />
            <Stack.Screen name='location' component={LocationScreen} />
            <Stack.Screen name='notification' component={NotificationScreen} />
            <Stack.Screen name='main' component={MainTabs} />
        </Stack.Navigator>
    )
}


export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}