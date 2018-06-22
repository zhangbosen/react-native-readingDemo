
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//引入工具
import Util from '../util/Util';
//引入导航
import ZSCommonNav from '../util/ZSCommonNav';
//引入ZSMineList组件
import ZSMineList from './ZSMineList';
//引入设置组件
import ZSMineSetting from './ZSMineSetting';

const listData = require('./localData/listData.json').data;


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    leftTitle="扫一扫"
                    rightTitle="设置"
                    mainTitle="我的"
                    clickLeftView={() => {alert("点击了左边")}}
                    clickRightView={() => {alert("点击了右边")}}
                />
                <ZSMineList
                    dataSource={listData}
                    headerView={this._renderHeader()}
                    clickRow={this._onClickRow.bind(this)}
                    insetHeight={300}
                />

            </View>
        );
    }

    _renderHeader() {
        return (
            <View style={styles.headerView}>
                <Image source={require('../../images/mine.png')} style={styles.headerBgImg} />
                <TouchableOpacity style={styles.userView}>
                    <Image source={require('../../images/person.png')} style={styles.mineIcon}/>
                    <Text style={styles.loginText}>点击登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onClickRow(sectionID, rowID) {
        switch(sectionID) {
            case 0:
                switch(rowID) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        alert("点击了第0组的第" + rowID + "行");
                        break;

                }
                break;
            case 1:
                switch(rowID) {
                    case 0:
                    case 1:
                    case 2:
                        alert("点击了第1组的第" + rowID + "行");
                        break;
                    case 3:
                        this.props.navigator.push({
                            component: ZSMineSetting
                        })
                }
                break;

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
    },
    headerBgImg: {
        width: Util.screen.width,
        height: Platform.OS === 'ios' ? Util.screen.height * 0.8 : Util.screen.height * 0.4
    },
    userView: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        left: (Util.screen.width - 100) / 2
    },
    mineIcon: {
        width: 60,
        height: 60,
        marginBottom: 10
    },
    loginText: {
        color: "#fff",
        backgroundColor: "transparent"
    }
});

