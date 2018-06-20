
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

//引入工具类
import Util from '../util/Util';
//引入导航组件
import ZSCommonNav from '../util/ZSCommonNav';
//引入ZSMineList组件
import ZSMineList from './ZSMineList';
//本地数据
const listData = require('./localData/settingData.json').data;


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    leftIcon="btn_backitem"
                    mainTitle="设置中心"
                    clickLeftView={() => this.props.navigator.pop()}
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
                }
                break;

        }
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor
    }
})


