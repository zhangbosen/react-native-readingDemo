
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

//引入属性类型检测工具
import PropTypes from 'prop-types';
//引入工具
import Util from '../util/Util';
//引入react-native-video组件
import Video from 'react-native-video';


export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigator.pop()}>
                    <Image source={{uri: "tnwifi_back_black"}} style={styles.backImg} />
                </TouchableOpacity>

                <Video
                    source={require('./localData/broadchurch.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onFullscreenPlayerWillPresent={this.fullScreenPlayerWillPresent} // Callback before fullscreen starts
                    onFullscreenPlayerDidPresent={this.fullScreenPlayerDidPresent}   // Callback after fullscreen started
                    onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss} // Callback before fullscreen stops
                    onFullscreenPlayerDidDismiss={this.fullScreenPlayerDidDismiss}  // Callback after fullscreen stopped
                    onProgress={this.setTime}               // Callback every ~250ms with currentTime
                    onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                    style={styles.backgroundVideo}
                />

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    btn: {
        position: "absolute",
        top: 0,
        left: 0,
        paddingTop: Util.statusBarHeight,
        zIndex: 1999
    },
    backImg: {
        width: 30,
        height: 30
    },
    backgroundVideo: {
        width: Util.screen.width,
        height: 300,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});

