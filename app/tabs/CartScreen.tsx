import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const CartScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text>Cart Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})

export default CartScreen