import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const EstimatePopulationModal = () => {
    return(
        <View style={styles.container}>
            <Text>
                平成30年10月1日現在の人口推計の結果を表示します。
            </Text>
            <Text>
                人口推計は、国勢調査を基礎として、毎月の出生・死亡・転入・転出を加減して算出された
            </Text>
            <Text>
                推計値を基とした人口数です。
            </Text>
            {/* <Button title="閉じる" onPress={this.props.toggle.estimatePopulationToggleModal}/> */}
        </View>
    )
}

export default EstimatePopulationModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
　　　　　　alignItems: 'center',
        backgroundColor: '#ffc',
    }
})