import { TouchableOpacity, View } from "react-native"

const BottomBarButton = ({ children, onPress }) => {
    return (
        <View className="bg-background w-20 !h-20 rounded-full flex items-center justify-center -mt-10 p-3">
            <TouchableOpacity onPress={onPress} className="bg-primary w-full h-full rounded-full" style={{
                shadowColor: 'gray',
                shadowOpacity: 0.2,
                shadowRadius: 3.5,
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                elevation: 5
            }}>
                {children}
            </TouchableOpacity>
        </View>
    )
}
export default BottomBarButton