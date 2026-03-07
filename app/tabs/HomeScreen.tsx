import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation, } from '@react-navigation/native';
import MySafeAreaView from '@/components/onboarding/MySafeAreaView';



const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <MySafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.profileWrapper} onPress={() => navigation.openDrawer()}>
                <Image
                    style={styles.profileicon}
                    source={require('@/assets/images/personal/dapo.png')}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Home Screen</Text>
        </MySafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    profileWrapper: {
        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 20,
    },
    text: {
        fontSize: 30,
        fontFamily: "Poppins_500Medium",
        textAlign: 'center',
        marginTop: 40,
    },
    profileicon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
})

export default HomeScreen