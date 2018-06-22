

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

//引入属性类型检测工具
import PropTypes from 'prop-types';

//引入工具
import Util from '../util/Util';


export default class App extends Component {
    static propTypes = {
        rowData: PropTypes.object
    };

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >
                {this._renderContent()}
            </ScrollView>
        )

    }

    _renderContent() {
        const content = this.props.rowData.content;
        const itemArr = [];
        content.forEach((val, key) => {
            itemArr.push(
                <TouchableOpacity key={key} style={styles.btn}>
                    <Image defaultSource={require('./../../images/placeholder_big.png')} source={{uri: val.img}} style={styles.img} />
                </TouchableOpacity>
            )
        });

        return itemArr;
    }




}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 15
    },
    btn: {
        marginRight: 15

    },
    img: {
        width: 150,
        height: 90,
        borderRadius: 8,
    }


});

