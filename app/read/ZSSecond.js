
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';

import Util from '../util/Util'
//引入字体图标
import Icon from 'react-native-vector-icons/Ionicons';



export default class ZSSecond extends Component {

    render() {
        return (
            <ScrollView
                style={styles.scrollViewContainer}
                horizontal={true}
            >
                {
                    this.props.data.map((val, key) => {
                        return (
                            <TouchableOpacity
                                style={styles.touchView}
                                key={key}
                            >
                                <Icon name={val.icon} size={40} color="#4F8EF7" />
                                <Text>{val.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
        )
    }


}

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: "#fff",
        //zbs:问题:  marginTop必须是height的一半,才能解决bug(bug:ZSSecond组件不能紧贴着轮播组件)
        height: 180,
        marginTop: -90
    },
    touchView: {
        width: 80,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },


});

