import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class TransitionPopulation extends Component {

    render(){
      let transitionPopulationBox = [];
      for(let i = 0; i <= 15; i++){
          transitionPopulationBox.push({});
      }
      transitionPopulationBox[0].x = 1945
      transitionPopulationBox[1].x = 1950
      transitionPopulationBox[2].x = 1955
      transitionPopulationBox[3].x = 1960
      transitionPopulationBox[4].x = 1965
      transitionPopulationBox[5].x = 1970
      transitionPopulationBox[6].x = 1975
      transitionPopulationBox[7].x = 1980
      transitionPopulationBox[8].x = 1985
      transitionPopulationBox[9].x = 1990
      transitionPopulationBox[10].x = 1995
      transitionPopulationBox[11].x = 2000
      transitionPopulationBox[12].x = 2005
      transitionPopulationBox[13].x = 2010
      transitionPopulationBox[14].x = 2015
      transitionPopulationBox[15].x = 2019

      transitionPopulationBox[0].y = 71998104
      transitionPopulationBox[1].y = 84114574
      transitionPopulationBox[2].y = 90076594
      transitionPopulationBox[3].y = 94301623
      transitionPopulationBox[4].y = 99209137
      transitionPopulationBox[5].y = 104665171
      transitionPopulationBox[6].y = 111939643
      transitionPopulationBox[7].y = 117060396
      transitionPopulationBox[8].y = 121048923
      transitionPopulationBox[9].y = 123611167
      transitionPopulationBox[10].y = 125570246
      transitionPopulationBox[11].y = 126925843
      transitionPopulationBox[12].y = 127767994
      transitionPopulationBox[13].y = 128057352
      transitionPopulationBox[14].y = 127094745
      transitionPopulationBox[15].y = 126443000

      const data = transitionPopulationBox;
      const height = Dimensions.get('window').height;
      return(
        <ScrollView>
            <Card title="人口推移" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={[1945,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015]}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y) => (`${y/100000000}億`)}
                    tickValues={[70000000,80000000,90000000,100000000,110000000,120000000]}
                  />
                    <VictoryLine
                       data={data}
                       style={{
                        data: { stroke: "#c43a31" }
                       }}
                     />
                 </VictoryChart>
             </Card>
             <View style={{alignItems: 'center', marginTop: 20}}>
               <Icon name="human-handsdown" size={50}/>
             </View>
          </ScrollView>
      )
    }
}

export default TransitionPopulation;