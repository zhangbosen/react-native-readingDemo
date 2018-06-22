
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

//引入属性类型检测工具
import PropTypes from 'prop-types';

//引入工具
import Util from '../util/Util';


export default class App extends Component {

    render() {
        const rowData = this.props.rowData;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.clickCell(rowData.video)}>
                <Image
                    style={styles.img}
                    source={{uri: rowData.img}}
                    defaultSource={require('../../images/placeholder_big.png')}
                />
                <View style={styles.bottomView}>
                    <Text style={styles.bottomText}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    img: {
        width: Util.screen.width,
        height: Util.screen.width * .5,
        backgroundColor: "skyblue"
    },
    bottomView: {
        position: "absolute",
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, .6)"
    },
    bottomText: {
        color: "#fff"
    }

});

