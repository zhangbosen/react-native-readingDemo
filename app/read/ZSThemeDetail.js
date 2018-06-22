
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

//引入导航
import ZSCommonNav from '../util/ZSCommonNav';
//引入工具类
import Util from '../util/Util'




export default class ZSThird extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ds: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    mainTitle="专题详情"
                    leftIcon="btn_backitem"
                    clickLeftView={()=>this.props.navigator.pop()}
                />
                <ListView
                    dataSource={this.state.ds}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>

        )
    }

    componentDidMount() {
        const data = this.props.data;
        this.setState({
            ds: this.state.ds.cloneWithRows(data)
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.rowContainer} onPress={() => this.props.clickDetail(rowData.article_link)}>
                <Image source={{uri: rowData.img_url}} style={styles.leftImg} />
                <View style={styles.rightView}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Text style={styles.author}>{rowData.author}</Text>
                </View>
            </TouchableOpacity>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    rowContainer: {
        borderBottomWidth: Util.minPixelRatio,
        borderBottomColor: "#ccc",
        flexDirection: "row",
        padding: 10

    },
    leftImg: {
        width: 120,
        height: 100,
        marginRight: 10
    },
    rightView: {
        flex: 1,
        justifyContent: "space-around"
    },
    title: {
        fontSize: 16

    },
    author: {
        color: "red",
        fontSize: 14
    }


});

