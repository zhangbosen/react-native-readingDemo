
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
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
                    clickRow={this._onClickRow.bind(this)}
                />

            </View>
        );
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
    }
});

