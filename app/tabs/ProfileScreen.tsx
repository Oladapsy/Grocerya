import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Profile Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


const styles = StyleSheet.create({

     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
         fontSize: 30,
        fontFamily: "Poppins_500Medium",
    }
})

export default ProfileScreen