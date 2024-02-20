import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo"

const NetworkStatus = () => {
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
        <View>
            <Text>{isConnected ? 'Connected': 'Disconnected'}</Text>
        </View>
    )
};

export default NetworkStatus