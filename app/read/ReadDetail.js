
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => this.props.navigator.pop()} style={styles.welcome}>
                    读书详情页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

