
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


export default class App extends Component {
    static propTypes = {
        clickBtn: PropTypes.func,
        btnSty: View.propTypes.style,
        textSty: Text.propTypes.style,
        title: PropTypes.string,
        renderImage: PropTypes.func
    };

    static defaultProps = {
        clickBtn(){},
        renderImage(){}
    };

    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.clickBtn()}} style={[styles.container, this.props.btnSty]}>
                {this.props.renderImage()}
                <Text style={[styles.btnText, this.props.textSty]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "red"
    },
    btnText: {
        fontSize: 16,
        backgroundColor: "transparent"
    }

});

