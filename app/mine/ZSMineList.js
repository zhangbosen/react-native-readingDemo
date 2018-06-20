
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

//引入属性类型
import PropTypes from 'prop-types';

//引入工具类
import Util from '../util/Util';
//引入行组件
import ZSMineRowCell from './ZSMineRowCell';


export default class App extends Component {
    static propTypes = {
        dataSource: PropTypes.array,
        clickRow: PropTypes.func
    };

    constructor(props) {
        super(props);

        const getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        
        const getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        
        this.state = {
            ds: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                getRowData,
                getSectionData
            })
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.ds}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }

    componentDidMount() {
        const dataSource = this.props.dataSource;
        const dataBlob = {}, sectionIDs = [], rowIDs = [];
        let rowData = [];
        dataSource.forEach((val, key) => {
            sectionIDs.push(key);
            rowIDs.push([]);
            rowData = val.rData;
            dataBlob[key] = val.sData;

            rowData.forEach((v, i) => {
                dataBlob[key + ':' + i] = v;
                rowIDs[key].push(i);
            })
        });

        //更新数据源
        this.setState({
            ds: this.state.ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }


    _renderSectionHeader(sectionData) {
        //组头没有标题
        if(!sectionData.title){
            return (
                <View style={{height: sectionData.height}}/>
            )
        }
        //组头有标题
        else {
            return (
                <View style={[{height: sectionData.height}, styles.sectionHeader]}>
                    <Text>{sectionData.title}</Text>
                </View>
            )
        }

    }

    _renderRow(rowData, sectionID, rowID){
        return (
            <ZSMineRowCell
                rowData={rowData}
                clickCell={() => this.props.clickRow(sectionID, rowID)}
            />
            
        )
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    }
});

