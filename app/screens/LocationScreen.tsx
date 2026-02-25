import PrimaryButton from '@/components/onboarding/PrimaryButton'
import ScreenHeader from '@/components/onboarding/ScreenHeader'
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from "@/assets/svg/map.svg";
import SecondaryButton from '@/components/onboarding/SecondaryButton';
import MapAndNotText from '@/components/onboarding/MapAndNotText';
import { useNavigation } from "@react-navigation/native";

const LocationScreen = () => {

    const navigation = useNavigation<any>();

    const handleContinue = () => {
        console.log("Final stage next notification");
        navigation.navigate("Notification");
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* ── Help and back icon ───*/}
                <ScreenHeader showHelp={true} showBack={true} />

                <View style={styles.mainText}>

                    {/* image */}
                    <Map width={200} height={200} style={styles.image} />
                    {/* header */}
                    
                    <MapAndNotText
                        title='Set your location'
                        subtitle='This let us know your location for best shipping experience' />

                </View>

                {/* button */}
                <View style={{ marginBottom: 10 }}>
                <PrimaryButton text='Continue' onPress={handleContinue} />
                <SecondaryButton text='Set Manually' onpress={console.log("Set manually pressed")} />
                </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
         flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
    },
    mainText: {
        flex: 1,
        marginTop: 40,
        alignItems: "center",
        
    },
    image: {
        marginBottom: 20,
        marginTop: 20,
    }

})

export default LocationScreen;