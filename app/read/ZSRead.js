
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

//引入工具
import Util from '../util/Util';

//引入导航
import ZSCommonNav from '../util/ZSCommonNav';
//引入轮播图组件
import ZSSwiper from './ZSSwiper';
//引入webview组件
import ZSWebView from './ZSWebView';
//引入轮播图下边的组件
import ZSSecond from './ZSSecond';
//引入未登录组件
import ZSThird from './ZSThird';
//引入登录组件
import ZSLogin from './ZSLogin';
//引入第四行的组件: 专题组件
import ZSFour from './ZSFour';
//引入第四行的点击跳转后的专题详情组件
import ZSThemeDetail from './ZSThemeDetail';


//拿到本地的数据
const topData = require('./localData/TopData.json');
const secondData = require('./localData/BannerData.json');
const themeData = require('./localData/TheamData.json');


export default class ZSRead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <ZSCommonNav
                    leftTitle="扫一扫"
                    rightTitle="设置"
                    mainIcon="reading"
                    clickLeftView={() => {alert("点击了左边")}}
                    clickRightView={() => {alert("点击了右边")}}
                />
                
                <ScrollView>
                    {/*轮播图*/}
                    <ZSSwiper data={topData} clickCell={this._clickSwiperCell.bind(this)} />

                    {/*第二行*/}
                    <ZSSecond data={secondData} />

                    {/*第三行: 登录组件*/}
                    <ZSThird
                        clickLogin={this._clickLogin.bind(this)}
                    />

                    {/*第四行: 专题组件*/}
                    <ZSFour 
                        themeData={themeData}
                        clickThemeBtn={this._clickThemeBtn.bind(this)}
                    />



                </ScrollView>


                
            </View>
        );
    }
    
    _clickSwiperCell(url) {
        this.props.navigator.push({
            component: ZSWebView,
            props: {
                url
            }
        })
        
        
    }

    _clickLogin() {
        this.props.navigator.push({
            component: ZSLogin
        })

    }

    _clickThemeBtn(theme) {
        this.props.navigator.push({
            component: ZSThemeDetail,
            props: {
                data: themeData[theme],
                clickDetail: this._clickThemeDetail.bind(this)
            }
        })
    }

    _clickThemeDetail(url) {
        this.props.navigator.push({
            component: ZSWebView,
            props: {
                url
            }
        })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
    }
});

