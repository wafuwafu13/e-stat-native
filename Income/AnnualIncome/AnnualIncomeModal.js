import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class AnnualIncomeModal extends Component{

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
                    平成28年民間給与実態調査の結果を表示します。
                </Text>
                <Text>
                    民間給与実態調査は、民間の事業所における年間の給与の実態を
                </Text>
                <Text>
                    給与階級別、事業所規模別、企業規模別等に明らかにする調査です。
                </Text>
                <Button title="閉じる" onPress={this.props.toggle.annualIncomeToggleModal}/>
            </View>
        )
    }
}

export default AnnualIncomeModal;