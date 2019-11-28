import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Condition extends Component {

    render(){
      let conditionBox = [];
      for(let i = 0; i <= 18; i++){
          conditionBox.push({});
      }
      conditionBox[0].x = 2019
      conditionBox[1].x = 2018.5
      conditionBox[2].x = 2018
      conditionBox[3].x = 2017.5
      conditionBox[4].x = 2017
      conditionBox[5].x = 2016.5
      conditionBox[6].x = 2016
      conditionBox[7].x = 2015.5
      conditionBox[8].x = 2015
      conditionBox[9].x = 2014.5
      conditionBox[10].x = 2014
      conditionBox[11].x = 2013.5
      conditionBox[12].x = 2013
      conditionBox[13].x = 2012.5
      conditionBox[14].x = 2012
      conditionBox[15].x = 2011.5
      conditionBox[16].x = 2011
      conditionBox[17].x = 2010.5
      conditionBox[18].x = 2010

      conditionBox[0].y = 45.6
      conditionBox[1].y = 48.7
      conditionBox[2].y = 49.9
      conditionBox[3].y = 50.0
      conditionBox[4].y = 49.4
      conditionBox[5].y = 46.3
      conditionBox[6].y = 47.2
      conditionBox[7].y = 50.3
      conditionBox[8].y = 46.1
      conditionBox[9].y = 48.5
      conditionBox[10].y = 55.7
      conditionBox[11].y = 52.1
      conditionBox[12].y = 51.1
      conditionBox[13].y = 44.3
      conditionBox[14].y = 46.6
      conditionBox[15].y = 47.4
      conditionBox[16].y = 47.9
      conditionBox[17].y = 44.7
      conditionBox[18].y = 42.8
      
      const data = conditionBox;
      const height = Dimensions.get('window').height;
      let tickBox = [];
      for(let i = 2010; i <= 2019; i+= 1){
          tickBox.push(i)
      }
      return(
        <ScrollView>
            <Card title="DI指数" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={tickBox}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]}
                  />
                    <VictoryLine
                      data={data}
                    />
                 </VictoryChart>
             </Card>
               <View style={{alignItems: 'center', marginTop: 20}}>
                 <Icon name="arrow-down-circle" size={50}/>
               </View>
             <Card>
              <Text style={{marginBottom: 10}}>父「このグラフを見て気づいたことはあるかな？」</Text>
             </Card>
          </ScrollView>
      )
    }
}

export default Condition;