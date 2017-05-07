
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text } from 'react-native';

// import Template from '../template/';


const styles = StyleSheet.create({
    container:{
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

HomeScreen.propTypes = {
};

export default HomeScreen;
