import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text>Home Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})

export default HomeScreen