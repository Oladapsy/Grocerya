import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import drawer
import { createDrawerNavigator } from '@react-navigation/drawer';


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

// icons
import HomeIcon from '@/assets/svg/tab/home.svg';
import CartIcon from '@/assets/svg/tab/cart.svg';
import FavouriteIcon from '@/assets/svg/tab/favourite.svg';
import ProfileIcon from '@/assets/svg/tab/profile.svg';

// view and text for the icon and the style
import { View, Text, StyleSheet } from 'react-native';

// type the screens for stack
export type RootStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Otp: undefined;
    Category: undefined;
    Location: undefined;
    Notification: undefined;
    Main: undefined;
};

// type the drawer param
export type DrawerParamList = {
    MainTab: undefined;
}

// type bottom tab param
export type BottomTabParamList = {
    Home: undefined;
    Cart: undefined;
    Favourite: undefined;
    Profile: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// the drawer function
function MyDrawer() {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name='MainTab' component={MainTabs} />
        </Drawer.Navigator>
    )
}


// the main tabs screen
function MainTabs() {
    return (
        <Tab.Navigator

            backBehavior='firstRoute'

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#0D0D0D",
                tabBarInactiveTintColor: "#CCCCCC",
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    paddingHorizontal: 34,
                    height: 84,
                    paddingTop: 20,
                },
                tabBarIcon: ({ focused, color, size: _ }) => {
                    const icons = {
                        Home: HomeIcon,
                        Cart: CartIcon,
                        Favourite: FavouriteIcon,
                        Profile: ProfileIcon,
                    } as const;

                    const IconComponent = icons[route.name as keyof typeof icons];
                    return (
                        <View
                            style={[
                                styles.TabContainer,
                                focused && styles.activeTab

                            ]}>
                            <IconComponent
                                width={20}
                                height={20}
                                color={color}
                            />
                            {focused && (
                                <Text style={styles.TabText}>
                                    {route.name}
                                </Text>
                            )}
                        </View>
                    );
                }
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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={OnboardingScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Otp' component={OtpScreen} />
            <Stack.Screen name='Category' component={SelectCategoryScreen} />
            <Stack.Screen name='Location' component={LocationScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='Main' component={MyDrawer} />
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

const styles = StyleSheet.create({

    TabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        minWidth: 105,
        minHeight: 40,

    },
    activeTab: {
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 0,


    },

    TabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0D0D0D',

    }
})