
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

//引入工具
import Util from '../util/Util';


export default class ZSPark extends Component {
    render() {
        return (
            <WebView
                source={require('./html/park.html')}
            />
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

