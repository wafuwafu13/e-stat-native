import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class AnnualIncome extends Component {

    render(){
      let manAnnualIncomeBox = [];
      for(let i = 0; i <= 11; i++){
          manAnnualIncomeBox.push({});
      }
      manAnnualIncomeBox[0].x = 17
      manAnnualIncomeBox[1].x = 22
      manAnnualIncomeBox[2].x = 27
      manAnnualIncomeBox[3].x = 32
      manAnnualIncomeBox[4].x = 37
      manAnnualIncomeBox[5].x = 42
      manAnnualIncomeBox[6].x = 47
      manAnnualIncomeBox[7].x = 52
      manAnnualIncomeBox[8].x = 57
      manAnnualIncomeBox[9].x = 62
      manAnnualIncomeBox[10].x = 67
      manAnnualIncomeBox[11].x = 72

      manAnnualIncomeBox[0].y = 1572000
      manAnnualIncomeBox[1].y = 2745000
      manAnnualIncomeBox[2].y = 3827000
      manAnnualIncomeBox[3].y = 4567000
      manAnnualIncomeBox[4].y = 5117000
      manAnnualIncomeBox[5].y = 5629000
      manAnnualIncomeBox[6].y = 6327000
      manAnnualIncomeBox[7].y = 6609000
      manAnnualIncomeBox[8].y = 6493000
      manAnnualIncomeBox[9].y = 4794000
      manAnnualIncomeBox[10].y = 3871000
      manAnnualIncomeBox[11].y = 3677000

      let womanAnnualIncomeBox = [];
      for(let i = 0; i <= 11; i++){
          womanAnnualIncomeBox.push({});
      }

      womanAnnualIncomeBox[0].x = 17
      womanAnnualIncomeBox[1].x = 22
      womanAnnualIncomeBox[2].x = 27
      womanAnnualIncomeBox[3].x = 32
      womanAnnualIncomeBox[4].x = 37
      womanAnnualIncomeBox[5].x = 42
      womanAnnualIncomeBox[6].x = 47
      womanAnnualIncomeBox[7].x = 52
      womanAnnualIncomeBox[8].x = 57
      womanAnnualIncomeBox[9].x = 62
      womanAnnualIncomeBox[10].x = 67
      womanAnnualIncomeBox[11].x = 72

      womanAnnualIncomeBox[0].y = 1062000
      womanAnnualIncomeBox[1].y = 2407000
      womanAnnualIncomeBox[2].y = 3089000
      womanAnnualIncomeBox[3].y = 3147000
      womanAnnualIncomeBox[4].y = 2999000
      womanAnnualIncomeBox[5].y = 3017000
      womanAnnualIncomeBox[6].y = 2994000
      womanAnnualIncomeBox[7].y = 2958000
      womanAnnualIncomeBox[8].y = 2877000
      womanAnnualIncomeBox[9].y = 2283000
      womanAnnualIncomeBox[10].y = 1949000
      womanAnnualIncomeBox[11].y = 2066000

      const manData = manAnnualIncomeBox;
      const womanData = womanAnnualIncomeBox
      const height = Dimensions.get('window').height;

      return(
        <ScrollView>
            <Card title="年代別年収 (平成28年民間給与実態統計調査)" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y) => (`${y/10000}万`)}
                    tickValues={[1000000,2000000,3000000,4000000,5000000,6000000,7000000]}
                  />
                    <VictoryGroup
                      colorScale={["#3399FF", "#FF66CC"]}
                      offset={10}
                      style={{data:{width:10}}}
                    >
                      <VictoryBar
                        data={manData}
                      />
                      <VictoryBar
                        data={womanData}
                      />
                    </VictoryGroup>
                 </VictoryChart>
             </Card>
             <View style={{alignItems: 'center', marginTop: 20}}>
              <Icon name="money-bill" size={50} style={{color: 'white'}}/>
             </View>
          </ScrollView>
      )
    }
}

export default AnnualIncome;