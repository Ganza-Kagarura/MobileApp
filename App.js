import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'

import Calculator from "./Screens/Calculator"
import Home from "./Screens/Home"
import Contacts from "./Screens/Contacts"
import { View, StyleSheet, Text } from "react-native"
import NetworkStatus from "./src/components/NetworkStatus"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <View>
    <>
      <Text style={styles.header}>Main Component</Text>
      <NetworkStatus />
      <NavigationContainer>
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
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Calculator" component={Calculator} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contacts" component={Contacts} />
          </Tab.Navigator>
      </NavigationContainer>
    </>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
