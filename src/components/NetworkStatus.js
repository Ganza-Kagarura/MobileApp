import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo"
import { useTheme } from "./ThemeContext";

const NetworkStatus = () => {

    const { theme, toggleTheme } = useTheme();
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        }
    },[]);

    return (
        <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
            <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Text>
            <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>{isConnected ? 'Connected': 'Disconnected'}</Text>
            <Button title="Toggle theme" onPress={toggleTheme} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default NetworkStatus