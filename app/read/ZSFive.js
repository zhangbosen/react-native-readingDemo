
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

//引入工具类
import Util from '../util/Util'


//九宫格布局
const boxWidth = 100, cols = 3;
const marginWidth = (Util.screen.width - boxWidth * 3) / (cols + 1);
const marginHeight = 15;



export default class ZSFive extends Component {

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
                {/*标题*/}
                <View style={styles.topView}>
                    <Text style={styles.topViewTitle}>最新专题</Text>
                </View>
                {/*内容*/}
                <ListView
                    dataSource={this.state.ds}
                    renderRow={this._renderRow.bind(this)}
                    contentContainerStyle={styles.contentContainer}
                />

            </View>

        )
    }
    componentDidMount() {
        const data = this.props.readData;
        this.setState({
            ds: this.state.ds.cloneWithRows(data)
        })
    }


    _renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.boxContainer} onPress={() => this.props.clickNewBtn(rowData.aticleSrc)}>
                <Image source={{uri: rowData.img}} style={styles.img} />
                <Text numberOfLines={2} style={styles.title}>{rowData.title}</Text>
                <Text style={styles.intro}>{rowData.intro}</Text>
            </TouchableOpacity>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 20
    },
    topView: {
        height: 44,
        borderBottomWidth: Util.minPixelRatio,
        borderBottomColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    topViewTitle: {
        fontWeight: "bold"
    },
    contentContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    boxContainer: {
        width: boxWidth,
        marginLeft: marginWidth,
        marginTop: marginHeight,
        // backgroundColor: "red"
    },

    img: {
        width: boxWidth,
        height: 120
    },

    title: {
        marginTop: 5,
        marginBottom: 5
    },

    intro: {
        color: "#666",
        fontSize: 13
    }

});

