
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

//引入属性类型
import PropTypes from 'prop-types';

//引入常用的功能
import Util from './Util';


export default class App extends Component<Props> {
    static propTypes = {
        leftTitle: PropTypes.string,
        leftIcon: PropTypes.string,
        mainTitle: PropTypes.string,
        mainIcon: PropTypes.string,
        rightTitle: PropTypes.string,
        rightIcon: PropTypes.string,
        clickLeftView: PropTypes.func,
        clickRightView: PropTypes.func
    };

    static defaultProps = {
        mainTitle: '',
        mainIcon: '',
        leftTitle: '',
        leftIcon: '',
        rightTitle: '',
        rightIcon: '',
        clickLeftView(){},
        clickRightView(){}

    };

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this._renderLeftView()}

                {/*中间*/}
                {this._renderCenterView()}

                {/*右边*/}
                {this._renderRightView()}

            </View>
        );
    }

    _renderLeftView() {
        let tempCom;
        const props = this.props;
        //第一种: 如果是文字
        if(props.leftIcon === '' && props.leftTitle !== '') {
            tempCom = <Text style={styles.leftTitle}>{props.leftTitle}</Text>

        }else {
            //第二种: 是图片
            if(props.leftIcon !== '') {
                tempCom = <Image source={{uri: props.leftIcon}} style={{width: 24, height: 24}} />

            }else {
                //第三种: 什么也不是
                tempCom = <View />

            }


        }

        return (
            <TouchableOpacity
                style={styles.leftView}
                onPress={() => props.clickLeftView()}
            >
                {tempCom}
            </TouchableOpacity>
        )

    }

    _renderCenterView() {
        let tempCom;
        const props = this.props;
        if(props.mainIcon === '' && props.mainTitle !== ''){
            //是文字
            tempCom = <Text style={styles.centerTitle}>{props.mainTitle}</Text>
        }else {
            if(props.mainIcon !== "") {
                tempCom = <Image source={{uri: props.mainIcon}} style={{width: 54, height: 27}} />
            }else {
                tempCom = <View />
            }
        }

        return (
            <View style={styles.centerView}>
                {tempCom}
            </View>
        )

    }

    _renderRightView() {
        let tempCom;
        const props = this.props;
        if(props.rightIcon === '' && props.rightTitle !== '') {
            tempCom = <Text style={styles.leftTitle}>{props.rightTitle}</Text>
        }else {
            if(props.rightIcon !== '') {
                tempCom = <Image source={{uri: props.rightIcon}} style={{width: 54, height: 27}} />
            }else {
                tempCom = <View />
            }
        }

        return (
            <TouchableOpacity
                style={styles.rightView}
                onPress={() => props.clickRightView()}
            >
                {tempCom}
            </TouchableOpacity>
        )

    }



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: Util.screen.width,
        height: Util.navHeight,
        borderBottomWidth: Util.minPixelRatio * 2,
        flexDirection: "row",
        borderBottomColor: '#ccc'
    },
    leftView: {
        height: Util.navHeight,
        flex: 1,
        paddingTop: Util.statusBarHeight,
        paddingLeft: 10,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    leftTitle: {
        fontSize: 16,
        color: "#000"
    },

    centerView: {
        flex: 3,
        height: Util.navHeight,
        paddingTop: Util.statusBarHeight,
        justifyContent: "center",
        alignItems: "center"
    },

    centerTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },

    rightView: {
        height: Util.navHeight,
        flex: 1,
        paddingTop: Util.statusBarHeight,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "flex-end"
    }


});

