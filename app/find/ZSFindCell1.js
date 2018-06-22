
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
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
        const rowData = this.props.rowData;
        return (
            <TouchableOpacity style={[styles.container, {marginTop: rowData.height}]}>
                {/*左边视图*/}
                <View style={styles.leftView}>
                    <Text style={styles.leftName}>{rowData.name}</Text>
                    <Text style={styles.leftDisc}>{rowData.disc}</Text>
                </View>

                {/*右边视图*/}
                <View style={styles.rightView}>
                    <Image source={{uri: 'icon_shike_arrow'}} style={{width: 7, height: 12}} />
                </View>

            </TouchableOpacity>
        )
    }




}

const styles = StyleSheet.create({
    container: {
        height: Util.cellHeight,
        backgroundColor: "#fff",
        borderBottomColor: "#ccc",
        borderBottomWidth: Util.minPixelRatio * 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftView: {
        flexDirection: "row",
        paddingLeft: 10
    },
    leftName: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    leftDisc: {
        color: "#666"
    },
    rightView: {
        paddingRight: 10
    }

});

