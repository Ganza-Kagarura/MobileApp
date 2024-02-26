import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../Screens/Home";
import Calculator from "../../Screens/Calculator";
import Profile from "../../Screens/Profile";
import ContactsScreen from "../../Screens/ContactsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Calculator">
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Calculator" component={Calculator} />
            <Drawer.Screen name="Contacts" component={ContactsScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;