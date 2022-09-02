import * as React from "react";
import {
    View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import { HomeIcon, HeartIcon, ViewListIcon, ShoppingBagIcon, UserIcon } from 'react-native-heroicons/outline'
import { HomeIcon as HomeIconS, HeartIcon as HeartIconS, ViewListIcon as ViewListIconS, ShoppingBagIcon as ShoppingBagIconS, UserIcon as UserIconS } from 'react-native-heroicons/solid'

const { width } = Dimensions.get("window");

const icons = [
    HomeIcon,
    HeartIcon,
    ViewListIcon,
    ShoppingBagIcon,
    UserIcon
]
const boldIcons = [
    HomeIconS,
    HeartIconS,
    ViewListIconS,
    ShoppingBagIconS,
    UserIconS
]


export default class StaticTabbar extends React.PureComponent {
    values = [];

    constructor(props) {
        super(props);
        const { state } = this.props;
        this.values = state.routes.map((route, index) => new Animated.Value(index === 2 ? 1 : 0));
    }

    render() {
        const { onPress } = this;
        const { state, descriptors, navigation, value } = this.props;
        const tabs = state.routes
        return (
            <View style={styles.container}>
                {
                    tabs.map((tab, key) => {
                        const tabWidth = width / tabs.length;
                        const cursor = tabWidth * key;
                        const opacity = value.interpolate({
                            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
                            outputRange: [1, 0, 1],
                            extrapolate: "clamp",
                        });
                        const translateY = this.values[key].interpolate({
                            inputRange: [0, 1],
                            outputRange: [64, 0],
                            extrapolate: "clamp",
                        });
                        const opacity1 = this.values[key].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                            extrapolate: "clamp",
                        });

                        const focused = state.index == key

                        const tabPress = () => {
                            const { value, state } = this.props;
                            const tabs = state.routes
                            const tabWidth = width / tabs.length;
                            Animated.sequence([
                                Animated.parallel(
                                    this.values.map(v => Animated.timing(v, {
                                        toValue: 0,
                                        duration: 100,
                                        useNativeDriver: true,
                                    })),
                                ),
                                Animated.parallel([
                                    Animated.spring(value, {
                                        toValue: tabWidth * key,
                                        useNativeDriver: true,
                                    }),
                                    Animated.spring(this.values[key], {
                                        toValue: 1,
                                        useNativeDriver: true,
                                    }),
                                ]),
                            ]).start();

                            const event = navigation.emit({
                                type: 'tabPress',
                                target: tab.key,
                                canPreventDefault: true
                            })

                            if (!focused && !event.defaultPrevented) {
                                navigation.navigate({ name: tab.name, merge: true })
                            }
                        }

                        return (
                            <React.Fragment {...{ key }}>
                                <TouchableWithoutFeedback onPress={() => tabPress()}>
                                    <Animated.View style={[styles.tab, { opacity }]}>
                                        {
                                            React.createElement(icons[key], { color: 'tomato' })
                                        }
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                                <Animated.View
                                    style={{
                                        position: "absolute",
                                        top: -8,
                                        left: tabWidth * key,
                                        width: tabWidth,
                                        height: 64,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        opacity: opacity1,
                                        transform: [{ translateY }],
                                    }}
                                >
                                    <View style={styles.activeIcon}>
                                        {
                                            React.createElement(boldIcons[key], { color: 'tomato' })
                                        }
                                    </View>
                                </Animated.View>
                            </React.Fragment>
                        );
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 64,
    },
    activeIcon: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
