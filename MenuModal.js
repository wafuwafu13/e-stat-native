import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MenuModal extends Component{

    render(){
        return(
            <View style={{ flex: 1 }}>
                <Text>I am the modal content!</Text>
                <Button title="hide" onPress={this.props.nav.toggleModal}/>
            </View>
        )
    }
}

export default MenuModal;