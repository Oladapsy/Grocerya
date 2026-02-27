import PrimaryButton from '@/components/onboarding/PrimaryButton'
import ScreenHeader from '@/components/onboarding/ScreenHeader'
import React from 'react';
import { StyleSheet, View } from 'react-native'
import Map from "@/assets/svg/map.svg";
import SecondaryButton from '@/components/onboarding/SecondaryButton';
import MapAndNotText from '@/components/onboarding/MapAndNotText';
import { useNavigation } from "@react-navigation/native";
import MySafeAreaView from '@/components/onboarding/MySafeAreaView';

const LocationScreen = () => {

    const navigation = useNavigation<any>();

    const handleContinue = () => {
        console.log("Final stage next notification");
        navigation.navigate("Notification");
    }
    return (
        <MySafeAreaView>
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


        </MySafeAreaView>
    )
}

const styles = StyleSheet.create({
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