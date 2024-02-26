import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Calculator from "../../Screens/Calculator"
import Home from "../../Screens/Home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsScreen from "../../Screens/ContactsScreen";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
         tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Calculator') {
            iconName = 'calculator';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Contacts') {
            iconName = 'contacts';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'blue',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    )
};

export default TabNavigation;