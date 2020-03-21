import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class BirthrateModal extends Component{

    render(){
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                justifyContent: 'center',
      　　　　　　alignItems: 'center',
                backgroundColor: '#ffc',
            }
        })

        return(
            <View style={styles.container}>
                <Text>
                    合計特殊出生率の推移を表示します。
                </Text>
                <Text>
                    合計特殊出生率は、1人の女性が15歳から49歳までに産む子供の数の平均を示す値です。
                </Text>
                <Button title="閉じる" onPress={this.props.toggle.birthrateToggleModal}/>
            </View>
        )
    }
}

export default BirthrateModal;