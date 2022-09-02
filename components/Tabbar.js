import * as React from "react";
import {
    SafeAreaView, StyleSheet, Dimensions, View, Animated,
} from "react-native";
import * as shape from "d3-shape";
// import { Svg } from "expo";
import Svg, { Circle, Rect, Path } from 'react-native-svg';

import StaticTabbar from "./StaticTabbar";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const backgroundColor = "white";
const { width } = Dimensions.get("window");
const height = 64;
export default class Tabbar extends React.PureComponent {
    value = new Animated.Value(width / 2 - 35);
    constructor(props) {
        super(props)
    }

    getPath(tabs) {
        const tabWidth = width / tabs.length;

        /******Width***** 0   tabWidth  * 0************2xwidth************     
         *               * + 5         * -5                              *
         *                *  +10      * -10                              *
         *                  *       *                                    *
         *(0,h)     left      *  * height          rightfunc           (w,h)   
         */
        const left = shape.line().x(d => d.x).y(d => d.y)([
            { x: 0, y: 0 },
            { x: width, y: 0 },
        ]);
        const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
            { x: width, y: 0 },
            { x: width + 5, y: 0 },
            { x: width + 10, y: 10 },
            { x: width + 15, y: height },
            { x: width + tabWidth - 15, y: height },
            { x: width + tabWidth - 10, y: 10 },
            { x: width + tabWidth - 5, y: 0 },
            { x: width + tabWidth, y: 0 },
        ]);
        const right = shape.line().x(d => d.x).y(d => d.y)([
            { x: width + tabWidth, y: 0 },
            { x: width * 2, y: 0 },
            { x: width * 2, y: height },
            { x: 0, y: height },
            { x: 0, y: 0 },
        ]);
        return `${left} ${tab} ${right}`;
    }

    render() {
        const { value, getPath } = this;
        const translateX = value.interpolate({
            inputRange: [0, width],
            outputRange: [-width, 0],
        });
        const { state, descriptors, navigation } = this.props
        const tabs = state.routes
        const d = getPath(tabs)
        return (
            <>
                <View style={{
                    backgroundColor: "tomato"
                }} {...{ height, width }}>
                    <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX }] }}>
                        <Path fill={backgroundColor} {...{ d }} />
                    </AnimatedSvg>
                    <View style={StyleSheet.absoluteFill}>
                        <StaticTabbar {...{ state, descriptors, navigation, value }} />
                    </View>
                </View>
                <SafeAreaView style={styles.container} />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor,
    },
});
