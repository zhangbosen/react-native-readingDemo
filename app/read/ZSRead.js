
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ReadDetail from './ReadDetail';


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

