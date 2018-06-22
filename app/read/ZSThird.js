
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,


} from 'react-native';

//引入类型检测
import PropTypes from 'prop-types';

//引入按钮组件
import ZSButton from '../util/ZSButton';



export default class ZSThird extends Component {
    static propTypes = {
        clickLogin: PropTypes.func
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerBox}>
                    <Image style={styles.imgSty} source={require('../../images/person.png')} />
                    <Text style={styles.textSty}>未登录 | </Text>
                    <ZSButton
                        title="立即登录"
                        btnSty={styles.btnSty}
                        textSty={styles.btnTextSty}
                        clickBtn={() => this.props.clickLogin()}
                    />
                </View>

            </View>
        )
    }
    

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    innerBox: {
        backgroundColor: "#e8e8e8",
        height: 34,
        borderRadius: 17,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    imgSty: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    textSty: {
        fontSize: 14

    },
    btnSty: {
        alignItems: "flex-start",
        height: 34,
        width: 80,
        backgroundColor: "transparent"
    },
    btnTextSty: {
        color: "red",
        fontSize: 14
    }
});

