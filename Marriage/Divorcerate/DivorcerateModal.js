import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DivorcerateModal = () => {
    return(
        <View style={styles.container}>
            <Text>
                人口動態調査の結果を表示します。
            </Text>
            <Text>
                人口動態調査は、戸籍法および死産の届出に関する規程により届け出られた
            </Text>
            <Text>
                出生、死亡、婚姻、離婚、死産の全数を対象として、毎月実施されます。
            </Text>
            <Button title="閉じる" onPress={this.props.toggle.divorcerateToggleModal}/>
        </View>
    )
}

export default DivorcerateModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
　　　　　　alignItems: 'center',
        backgroundColor: '#ffc',
    }
})