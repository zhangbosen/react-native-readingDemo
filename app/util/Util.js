import React, {Component} from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';

module.exports = {
    //1. 获取屏幕相关的属性
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        scale: Dimensions.get('window').scale
    },

    //2. 最小线宽
    minPixelRatio: 1 / PixelRatio.get(),

    //3. 请求网路数据, get
    get: (api, success, fail) => {
        fetch(api)
            .then(response => response.json())
            .then(responseJson => success(responseJson))
            .catch(err => fail(err))
    },

    //4. 导航的高度
    navHeight: Platform.OS === 'ios' ? 64 : 44,

    //5. 状态栏的高度
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,

    bgColor: "#e8e8e8",

    //Mine里面每行的高度
    cellHeight: 44
};