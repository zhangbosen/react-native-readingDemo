
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

//引入工具
import Util from '../util/Util';
//引入导航
import ZSCommonNav from '../util/ZSCommonNav';
//引入Cell1
import ZSFindCell1 from './ZSFindCell1';
//引入Cell2
import ZSFindCell2 from './ZSFindCell2';
//引入Cell3
import ZSFindCell3 from './ZSFindCell3';
//引入Video组件
import ZSVideo from './ZSVideo';

//拿到本地数据
const localData = require('./localData/discoverData.json').data;





export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        const getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]
        };
        
        const getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ":" + rowID]
        };
        
        this.state = {
            ds: new ListView.DataSource({
                getSectionData,
                getRowData,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        
        
        
        
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ZSCommonNav
                    leftTitle="扫一扫"
                    rightTitle="设置"
                    mainIcon="discover"
                    clickLeftView={() => {alert("点击了左边")}}
                    clickRightView={() => {alert("点击了右边")}}
                />
                <ListView
                    dataSource={this.state.ds}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    renderRow={this._renderRow.bind(this)}
                    //去掉组头的吸顶效果
                    stickySectionHeadersEnabled={false}
                />
            </View>
        );
    }
    
    componentDidMount() {
        const dataBlob = {}, sectionIDs = [], rowIDs = [];
        let rowData = [];
        localData.forEach((val, i) => {
            sectionIDs.push(i);
            rowIDs.push([]);
            rowData = val.rData;
            dataBlob[i] = val.sData;

            rowData.forEach((row, key) => {
                rowIDs[i].push(key);
                dataBlob[i + ":" + key] = row;
            })
        });

        this.setState({
            ds: this.state.ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
        
    }

    _renderSectionHeader(sectionData) {
        //组有内容
        if(sectionData.sType === 1) {
            return <ZSFindCell1 rowData={sectionData} />
            
        }
        //组没有内容
        else {
            return <View style={{height: sectionData.height}} />
        }
    }

    _renderRow(rowData) {
        if(rowData.type === 0){
            return <ZSFindCell1 rowData={rowData} />
        }
        else if(rowData.type === 1) {
            return <ZSFindCell2 rowData={rowData}/>
        }
        else {
            return <ZSFindCell3 rowData={rowData} clickCell={this._pushToVideo.bind(this)} />
        }
    }
    
    _pushToVideo(videoSrc) {
        this.props.navigator.push({
            component: ZSVideo,
            props: {
                videoSrc
            }
        })

    }
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

