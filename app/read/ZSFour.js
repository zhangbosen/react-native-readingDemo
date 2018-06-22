
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

//引入按钮组件
import ZSButton from '../util/ZSButton';




export default class ZSThird extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ZSButton
                    btnSty={styles.btnSty}
                    renderImage={() => <Image source={require('../../images/theam_1.jpg')} style={styles.bgImg} />}
                    clickBtn={() => this.props.clickThemeBtn('react')}
                />
                <ZSButton
                    btnSty={styles.btnSty}
                    renderImage={() => <Image source={require('../../images/theam_2.jpg')} style={styles.bgImg} />}
                    clickBtn={() => this.props.clickThemeBtn('node')}
                />
                <ZSButton
                    btnSty={styles.btnSty}
                    renderImage={() => <Image source={require('../../images/theam_3.jpg')} style={styles.bgImg} />}
                    clickBtn={() => this.props.clickThemeBtn('other')}
                />
            </View>

        )
    }
    


}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingBottom: 20
    },
    btnSty: {
        width: 108,
        height: 61,
        borderRadius: 0
    },
    bgImg: {
        width: 108,
        height: 61,
        position: "absolute",
        top: 0,
        left: 0
    }
   
});

