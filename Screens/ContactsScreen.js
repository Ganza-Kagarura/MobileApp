import React, { useEffect, useState } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import Contacts from "react-native-contacts";

export default function ContactsScreen() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        Contacts.checkPermission().then((permission) => {
            if (permission === 'authorized') {
                fetchContacts();
            } else if (permission === 'undefined') {
                Contacts.requestPermission().then((newPermission) => {
                    if (newPermission === 'authorized') {
                        fetchContacts();
                    }
                });
            }
        });
    },[]);

    const fetchContacts = () => {
        Contacts.getAll()
            .then((allContacts) => {
                setContacts(allContacts);
            })
            .catch((error) => console.error(error))
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.recordID}
                renderItem={({item}) => (
                    <View>
                        <Text>{`${item.givenName} ${item.familyName}`}</Text>
                    </View>
                )} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });