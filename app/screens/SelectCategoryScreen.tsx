import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategorySelector from '@/components/onboarding/CategorySelector';
import HeaderText from '@/components/onboarding/HeaderText';
import PrimaryButton from '@/components/onboarding/PrimaryButton';
import ScreenHeader from '@/components/onboarding/ScreenHeader';
import { useNavigation } from "@react-navigation/native";
import { categories } from '@/assets/constants/categories';
import MySafeAreaView from '@/components/onboarding/MySafeAreaView';

const SelectCategoryScreen = () => {

    const navigation = useNavigation<any>();

    const handleContinue = () => {
        console.log("Next Stage Maps/ Location");

        navigation.navigate("Location");
    };
    return (
        <MySafeAreaView>
            <View style={styles.container}>
                {/* ── Help and back icon ───*/}
                <ScreenHeader showHelp={true} showBack={true} />

                <View style={styles.mainText}>
                    {/* header */}
                    <HeaderText
                        title='All your grocery need in one place'
                        subtitle='Select your desired shop category' />

                    <CategorySelector categories={categories} onselect={console.log} />
                </View>
                {/* button */}
                <PrimaryButton text='Continue' onPress={handleContinue} />
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
    }
})
export default SelectCategoryScreen