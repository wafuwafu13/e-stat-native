import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SumPopulationModal extends Component{

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
                    平成27年に行われた国勢調査の結果を表示します。
                </Text>
                <Text>
                    国勢調査は、日本に居住している全ての人および世帯を対象として5年ごとに実施される
                </Text>
                <Text>
                    国の最も重要かつ基本的な統計調査です。
                </Text>
                <Button title="閉じる" onPress={this.props.toggle.sumPopulationToggleModal}/>
            </View>
        )
    }
}

export default SumPopulationModal;