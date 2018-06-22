
import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import Util from '../util/Util';


export default class extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <Swiper
                height={Util.screen.width * 0.5}
                style={styles.container}
                showsButtons={false}
                showsPagination={false}
                loop={true}
                autoplay={true}
            >
                {this.props.data.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => this.props.clickCell(item.url)}>
                            <Image 
                                defaultSource={require('../../images/placeholder_big.png')} 
                                source={{uri: item.image}} 
                                style={styles.img}
                            />
                        </TouchableOpacity>
                    )
                })}
            </Swiper>
        )
    }
}

const styles = {
    container: {
        backgroundColor: "skyblue",
    },
    img: {
        width: Util.screen.width,
        height: Util.screen.width * 0.5
    }
}
