import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="bg-asecondary flex-1">
            <View className="h-5 w-10">
                {/* <SparklesIconOutline color="red" fill="black" size={42} /> */}
            </View>
            <Text className="font-bold text-red-500">Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </SafeAreaView >
    )
}

export default Home