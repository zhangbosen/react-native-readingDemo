
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

import ReadDetail from './ReadDetail';


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    leftTitle="扫一扫"
                    rightTitle="设置"
                    mainIcon="reading"
                    clickLeftView={() => {alert("点击了左边")}}
                    clickRightView={() => {alert("点击了右边")}}
                />
                <Text onPress={() => this._pushToNext()} style={styles.welcome}>
                    读书页面
                </Text>
            </View>
        );
    }

    _pushToNext() {
        this.props.navigator.push({
            component: ReadDetail
        })
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

