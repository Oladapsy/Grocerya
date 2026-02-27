import MySafeAreaView from '@/components/onboarding/MySafeAreaView'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
    return (
        <MySafeAreaView style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </MySafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    text: {
        fontSize: 30,
        fontFamily: "Poppins_500Medium",
    }
})

export default ProfileScreen