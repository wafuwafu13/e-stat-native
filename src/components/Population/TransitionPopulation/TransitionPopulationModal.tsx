import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
    toggle: () => void
}

const TransitionPopulationModal: React.FC<Props> = props => {

    const { toggle } = props

    return(
        <View style={styles.container}>
            <Text>
                国勢調査の結果を表示します。
            </Text>
            <Text>
                国勢調査は、日本に居住している全ての人および世帯を対象として5年ごとに実施される
            </Text>
            <Text>
                国の最も重要かつ基本的な統計調査です。
            </Text>
            <Button title="閉じる" onPress={toggle} />
        </View>
    )
}

export default TransitionPopulationModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
　　　　　alignItems: 'center',
        backgroundColor: '#ffc',
    }
})