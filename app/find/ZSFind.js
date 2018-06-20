
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

//引入工具
import Util from '../util/Util';

//引入导航
import ZSCommonNav from '../util/ZSCommonNav';


export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    leftTitle="扫一扫"
                    rightTitle="设置"
                    mainIcon="discover"
                    clickLeftView={() => {alert("点击了左边")}}
                    clickRightView={() => {alert("点击了右边")}}
                />
                <Text style={styles.welcome}>
                    发现页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

