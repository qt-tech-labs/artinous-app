import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { PlusIcon, ShoppingCartIcon } from 'react-native-heroicons/outline';
import Constants from '../utils/Constants';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const CategoryTitle = ({ text, selected }) => {
    return (
        <TouchableOpacity className="mx-4">
            <Text className={`uppercase ${selected ? 'text-primary font-bold' : 'text-light-title font-medium'}`}>{text}</Text>
        </TouchableOpacity>
    )
}

const CircleButton = ({ children }) => {
    return (
        <TouchableOpacity className="bg-primary rounded-full w-10 h-10 flex flex-row justify-center items-center">
            {children}
        </TouchableOpacity>
    )
}

const Products = () => {
    const [dataSource, setDataSource] = React.useState([
        {
            image: "https://picsum.photos/200/300",
            title: "Dining chair",
            price: 123,
            colors: ["#a8a29e", "#f97316", "#65a30d"]
        },
        {
            image: "https://picsum.photos/200/300",
            title: "Dining chair",
            price: 123,
            colors: ["#a8a29e", "#f97316", "#65a30d"]
        },
        {
            image: "https://picsum.photos/200/300",
            title: "Dining chair",
            price: 123,
            colors: ["#a8a29e", "#f97316", "#65a30d"]
        },
        {
            image: "https://picsum.photos/200/300",
            title: "Dining chair",
            price: 123,
            colors: ["#a8a29e", "#f97316", "#65a30d"]
        },
        {
            image: "https://picsum.photos/200/300",
            title: "Dining chair",
            price: 123,
            colors: ["#a8a29e", "#f97316", "#65a30d"]
        }
    ])
    const [currentPosition, setCurrentPosition] = useState(0)
    const cats = [
        {
            title: "All",
            selected: true
        },
        {
            title: "Furniture",
            selected: false
        },
        {
            title: "Shoes",
            selected: false
        },
        {
            title: "hoodies",
            selected: false
        },
        {
            title: "Accessories",
            selected: false
        },
        {
            title: "Home",
            selected: false
        }
    ]

    const tabBarHeight = useBottomTabBarHeight()

    return (
        <SafeAreaView className="bg-background flex-1">
            <TouchableOpacity className="self-end m-5">
                <ShoppingCartIcon className="text-gray-900" color={Constants.Color['sub-title']} />
            </TouchableOpacity>
            <Text className="text-title font-bold text-3xl m-5">Our Products</Text>
            <ScrollView className="h-10" horizontal={true} showsHorizontalScrollIndicator={false}>
                {cats.map((cat, index) => <CategoryTitle key={index.toString()} text={cat.title} selected={cat.selected} />)}
            </ScrollView>
            <FlatList
                className=" flex-1 pb-20"
                contentContainerStyle={{
                    paddingBottom: tabBarHeight
                }}
                onScrollEndDrag={(event) => {
                    let x = event.nativeEvent
                    console.log(x.contentOffset)
                }}
                data={dataSource}
                renderItem={({ item }) => (
                    <TouchableOpacity className="bg-ww rounded-xl shadow-2xl shadow-black flex flex-1 m-3 flex-col">
                        <Image className="w-full h-60 object-cover rounded-t-xl" source={{
                            uri: item.image
                        }} />
                        {
                            item.colors.length > 0 &&
                            <View className="flex flex-row mx-3 mt-3">
                                {item.colors.map((color) => <TouchableOpacity style={{
                                    backgroundColor: color,
                                    marginHorizontal: 1
                                }} className="w-4 h-4 rounded-full"></TouchableOpacity>)}
                            </View>

                        }
                        <View className="flex flex-row mx-3 mb-5">
                            <View className="flex flex-col flex-1">
                                <Text Text className="text-title font-medium text-lg">{item.title}</Text>
                                <Text Text className="text-title font-bold text-lg">${item.price}</Text>
                            </View>
                            <CircleButton children={(<PlusIcon color={Constants.Color.ww} />)} />
                        </View>
                    </TouchableOpacity>
                )
                }
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default Products