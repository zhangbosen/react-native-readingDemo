import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';

//引入主页面
import ZSMain from './ZSMain';

//引入按钮组件
import ZSButton from '../util/ZSButton';

import Util from '../util/Util';


export default class ZSLaunch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFirstIn: false
        }
    }
    render() {
        if(this.state.isFirstIn) {
            //第一次进来, 则进入启动页
            return (
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    loop={false}
                >
                    <View style={styles.slide1}>
                        <Image source={require('../../images/slider1.png')} style={styles.imgSty} />
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../../images/slider2.png')} style={styles.imgSty} />
                        <ZSButton
                            clickBtn={() => this._replaceToMain()}
                            btnSty={styles.btnSty}
                            textSty={styles.textSty}
                            title="立即体验"
                        />
                    </View>
                </Swiper>
            )

        }else {
            //不是第一次,则直接进入主页
            return (
                //一定要把属性传递过来
                <ZSMain {...this.props} />
            )
        }

    }

    _replaceToMain() {
        this.props.navigator.replace({
            component: ZSMain
        })

    }

}

var styles = {
    wrapper: {
    },
    slide1: {
        flex: 1
    },
    slide2: {
        flex: 1,
        alignItems: 'center'

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imgSty: {
        width: Util.screen.width,
        height: Util.screen.height
    },
    btnSty: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "red",
        width: 120,
        height: 40,
        position: "absolute",
        bottom: 100,
    },
    textSty: {
        color: "red"
    }
};

module.exports = ZSLaunch;

