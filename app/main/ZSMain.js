
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Find from '../find/ZSFind';
import Read from '../read/ZSRead';
import Park from '../park/ZSPark';
import Mine from '../mine/ZSMine';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: "read"
        }

    }
    render() {
        return (
            <TabNavigator>
                {/*读书*/}
                {this._renderItem("读书", "icon_tabbar_homepage", "icon_tabbar_homepage_selected", "read", <Read {...this.props} />, '')}

                {/*公园*/}
                {this._renderItem("公园", "icon_tabbar_merchant_normal", "icon_tabbar_merchant_selected", "park", <Park {...this.props} />,'')}

                {/*发现*/}
                {this._renderItem("发现", "icon_tabbar_nearby_normal", "icon_tabbar_nearby_selected", "find", <Find {...this.props} />, '')}

                {/*我的*/}
                {this._renderItem("我的", "icon_tabbar_mine", "icon_tabbar_mine_selected", "mine", <Mine {...this.props} />, "10")}

            </TabNavigator>

        );
    }

    _renderItem(title, renderIcon, renderSelectedIcon, selected, component, text) {
        return (
            <TabNavigator.Item
                title={title}
                selectedTitleStyle={styles.tabTitle}
                renderIcon={() => <Image source={{uri: renderIcon}} style={styles.tabImg} />}
                renderSelectedIcon={() => <Image source={{uri: renderSelectedIcon}} style={styles.tabImg} />}
                selected={this.state.selectedTab === selected}
                onPress={() => this.setState({selectedTab: selected})}
                renderBadge={() => this._renderBadge(text)}

            >
                {component}
            </TabNavigator.Item>
        )
    }

    _renderBadge(text) {
        if(text === '') return <View />;
        return (
            <View style={styles.badgeView}>
                <Text style={styles.badgeText}>{text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabTitle: {
        color: "rgba(47, 172, 160, 1)"

    },
    tabImg: {
        width: 26,
        height: 26
    },
    badgeView: {
        backgroundColor: "red",
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: Platform.OS === 'ios' ? -6 : -3
    },
    badgeText: {
        backgroundColor: "transparent",
        color: "#fff"
    }
});
