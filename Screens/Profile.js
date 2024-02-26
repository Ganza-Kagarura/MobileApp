import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import ImagePicker from "react-native-image-picker";

const Profile = () => {

    const [profileImage, setProfileImage] = useState(null);

    const selectImage = () => {
        ImagePicker.showImagePicker({mediaType: 'photo'}, (response) => {
            if(!response.didCance) {
                setProfileImage({uri: response.uri})
            }
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                // title="Add photo" 
                onPress={selectImage}
            >
            {profileImage ? (
                <Image
                source={profileImage}
                style={styles.profileImage}
             />
            ): (

            <Text>Profile</Text>
            )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    }
})

export default Profile;