import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Products from '../screens/Products';
import Basket from '../screens/Basket'
import Profile from '../screens/Profile'
import Constants from '../utils/Constants'
import { HomeIcon, HeartIcon, ViewListIcon, ShoppingBagIcon, UserIcon } from 'react-native-heroicons/outline'
import { HomeIcon as HomeIconS, HeartIcon as HeartIconS, ViewListIcon as ViewListIconS, ShoppingBagIcon as ShoppingBagIconS, UserIcon as UserIconS } from 'react-native-heroicons/solid'
import React from 'react';
import BottomBarButton from './BottomBarButton';
import Tabbar from './Tabbar';

const HomeStack = createStackNavigator()
const HomeStackScreens = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name={Constants.Tab.First.Children.Main} component={Home} />
        </HomeStack.Navigator>
    )
}

const FavouriteStack = createStackNavigator()
const FavouriteStackScreens = () => {
    return (
        <FavouriteStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <FavouriteStack.Screen name={Constants.Tab.Second.Children.Main} component={Favourites} />
        </FavouriteStack.Navigator>
    )
}

const ProductStack = createStackNavigator()
function ProductStackScreen() {
    return (
        <ProductStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <ProductStack.Screen name={Constants.Tab.Third.Children.Main} component={Products} />
        </ProductStack.Navigator>
    )
}

const BasketStack = createStackNavigator()
function BasketStackScreen() {
    return (
        <BasketStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BasketStack.Screen name={Constants.Tab.Fourth.Children.Main} component={Basket} />
        </BasketStack.Navigator>
    )
}

const ProfileStack = createStackNavigator()
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <ProfileStack.Screen name={Constants.Tab.Fiveth.Children.Main} component={Profile} />
        </ProfileStack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: "tomato",
        borderRadius: 25,
        position: 'absolute',
        borderTopWidth: 0,
        paddingTop: 15,
        height: 100
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray'
})

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName={Constants.Tab.Third.Title} screenOptions={screenOptions} tabBar={props => <Tabbar {...props} />}>
            <Tab.Screen name={Constants.Tab.First.Title} component={HomeStackScreens} />
            <Tab.Screen name={Constants.Tab.Second.Title} component={FavouriteStackScreens} />
            <Tab.Screen name={Constants.Tab.Third.Title} component={ProductStackScreen} />
            <Tab.Screen name={Constants.Tab.Fourth.Title} component={BasketStackScreen} />
            <Tab.Screen name={Constants.Tab.Fiveth.Title} component={ProfileStackScreen} />
        </Tab.Navigator>
    )
}
export default BottomTab