import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HeightPopulationModal extends Component{

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
                    平成28年国民健康・栄養調査の結果を表示します。
                </Text>
                <Text>
                    国民健康・栄養調査は、毎年、食生活状況、各種身体・血液検査や飲酒、喫煙、運動習慣などを調べており、
                </Text>
                <Text>
                    国における健康増進対策や生活習慣病対策に不可欠な調査です。
                </Text>
                <Button title="閉じる" onPress={this.props.toggle.heightToggleModal}/>
            </View>
        )
    }
}

export default HeightPopulationModal;