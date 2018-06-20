
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';

//引入属性类型
import PropTypes from 'prop-types';

//引入工具类
import Util from '../util/Util';


export default class App extends Component {
    static propTypes = {
        rowData: PropTypes.object,
        clickCell: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            switchSelected: false
        }

    }

    render() {
        const rowData= this.props.rowData;
        return (
            <TouchableOpacity style={styles.rowView} onPress={() => this.props.clickCell()}>
                {/*左边*/}
                {this._renderLeft(rowData)}

                {/*右边*/}
                {this._renderRight(rowData)}
                
            </TouchableOpacity>
        );
    }
    
    _renderLeft(rowData) {
        let temp;
        //如果有图片
        if(rowData.leftIcon) {
            //如果是图片 + 文字
            if(rowData.name) {
                temp = (
                    <View style={styles.leftView}>
                        <Image source={{uri: rowData.leftIcon}} style={styles.imgSty} />
                        <Text>{rowData.name}</Text>
                    </View>
                );
            }
            //如果只有图片
            else {
                temp = (
                    <View style={styles.leftView}>
                        <Image source={{uri: rowData.leftIcon}} style={styles.imgSty} />
                    </View>
                )
            }
        }
        //如果只有文字
        else if(rowData.name) {
            temp = (
                <View style={styles.leftView}>
                    <Text>{rowData.name}</Text>
                </View>
            )
        }
        //什么都没有
        else {
            temp = (
                <View />
            )
        }


        return temp;
    }
    
    _renderRight(rowData) {
        let temp;
        //有文字
        if(rowData.disc) {
            //不是开关
            if(rowData.disc !== 'switch'){
                temp = (
                    <View style={styles.rightView}>
                        <Text style={{color:'#666', marginRight:5}}>{rowData.disc}</Text>
                        <Image source={{uri: "icon_shike_arrow"}} style={{width: 7, height: 12}}/>
                    </View>
                )
            }
            //是开关
            else {
                temp = (
                    <View style={styles.rightView}>
                        <Switch
                            value={this.state.switchSelected}
                            onValueChange={() => this.setState({
                                switchSelected: !this.state.switchSelected
                            })}
                        />
                    </View>
                )
            }
        }
        //没有文字
        else {
            temp = (
                <View style={styles.rightView}>
                    <Image source={{uri: "icon_shike_arrow"}} style={{width: 7, height: 12}}/>
                </View>
            )

        }
        
        return temp;
    }

    
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Util.screen.width,
        height: Util.cellHeight,
        backgroundColor: "#fff",
        borderBottomColor: "#ccc",
        borderBottomWidth: Util.minPixelRatio * 2
    },
    leftView: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10

    },
    imgSty: {
        width: 20,
        height: 20,
        marginRight: 5
    },

    rightView: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10
    }
});

