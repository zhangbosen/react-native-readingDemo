
import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';

import Util from '../util/Util';
import ZSCommonNav from '../util/ZSCommonNav';


export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    mainTitle="详情"
                    leftIcon="btn_backitem"
                    clickLeftView={() => this.props.navigator.pop()}
                />
                <WebView
                    source={{uri: this.props.url}}
                />

            </View>

        )
    }

}

const styles = {
    container: {
        flex: 1,
    }

}
