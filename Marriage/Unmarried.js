import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Unmarrid extends Component {

    render(){
      let manUnmarridBox = [];
      for(let i = 0; i <= 18; i++){
          manUnmarridBox.push({});
      }
      manUnmarridBox[0].x = 1920
      manUnmarridBox[1].x = 1925
      manUnmarridBox[2].x = 1930
      manUnmarridBox[3].x = 1935
      manUnmarridBox[4].x = 1940
      manUnmarridBox[5].x = 1950
      manUnmarridBox[6].x = 1955
      manUnmarridBox[7].x = 1960
      manUnmarridBox[8].x = 1965
      manUnmarridBox[9].x = 1970
      manUnmarridBox[10].x = 1975
      manUnmarridBox[11].x = 1980
      manUnmarridBox[12].x = 1985
      manUnmarridBox[13].x = 1990
      manUnmarridBox[14].x = 1995
      manUnmarridBox[15].x = 2000
      manUnmarridBox[16].x = 2005
      manUnmarridBox[17].x = 2010
      manUnmarridBox[18].x = 2015

      manUnmarridBox[0].y = 2.82
      manUnmarridBox[1].y = 2.26
      manUnmarridBox[2].y = 2.433
      manUnmarridBox[3].y = 2.425
      manUnmarridBox[4].y = 2.73
      manUnmarridBox[5].y = 1.88
      manUnmarridBox[6].y = 1.73
      manUnmarridBox[7].y = 2.03
      manUnmarridBox[8].y = 2.44
      manUnmarridBox[9].y = 2.82
      manUnmarridBox[10].y = 3.66
      manUnmarridBox[11].y = 4.75
      manUnmarridBox[12].y = 7.44
      manUnmarridBox[13].y = 11.78
      manUnmarridBox[14].y = 16.51
      manUnmarridBox[15].y = 18.69
      manUnmarridBox[16].y = 22.70
      manUnmarridBox[17].y = 28.6
      manUnmarridBox[18].y = 29.96

      let womanUnmarridBox = [];
      for(let i = 0; i <= 18; i++){
          womanUnmarridBox.push({});
      }

      womanUnmarridBox[0].x = 1920
      womanUnmarridBox[1].x = 1925
      womanUnmarridBox[2].x = 1930
      womanUnmarridBox[3].x = 1935
      womanUnmarridBox[4].x = 1940
      womanUnmarridBox[5].x = 1950
      womanUnmarridBox[6].x = 1955
      womanUnmarridBox[7].x = 1960
      womanUnmarridBox[8].x = 1965
      womanUnmarridBox[9].x = 1970
      womanUnmarridBox[10].x = 1975
      womanUnmarridBox[11].x = 1980
      womanUnmarridBox[12].x = 1985
      womanUnmarridBox[13].x = 1990
      womanUnmarridBox[14].x = 1995
      womanUnmarridBox[15].x = 2000
      womanUnmarridBox[16].x = 2005
      womanUnmarridBox[17].x = 2010
      womanUnmarridBox[18].x = 2015

      womanUnmarridBox[0].y = 2.15
      womanUnmarridBox[1].y = 1.89
      womanUnmarridBox[2].y = 1.79
      womanUnmarridBox[3].y = 1.792
      womanUnmarridBox[4].y = 2
      womanUnmarridBox[5].y = 1.99
      womanUnmarridBox[6].y = 2.34
      womanUnmarridBox[7].y = 3.14
      womanUnmarridBox[8].y = 4.67
      womanUnmarridBox[9].y = 5.29
      womanUnmarridBox[10].y = 4.99
      womanUnmarridBox[11].y = 4.45
      womanUnmarridBox[12].y = 4.89
      womanUnmarridBox[13].y = 5.78
      womanUnmarridBox[14].y = 6.76
      womanUnmarridBox[15].y = 8.64
      womanUnmarridBox[16].y = 12.24
      womanUnmarridBox[17].y = 17.37
      womanUnmarridBox[18].y = 19.3
      
      const manData = manUnmarridBox;
      const womanData = womanUnmarridBox
      const height = Dimensions.get('window').height;
      let tickXBox = [];
      for(let i = 1920; i <= 2015; i+=5){
          tickXBox.push(i);
      }
      let tickYBox = [];
      for(let i = 5; i <= 30; i+=5){
          tickYBox.push(i);
      }
      return(
        <ScrollView>
            <Card title="未婚率" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={tickXBox}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={tickYBox}
                  />
                    <VictoryGroup
                      colorScale={["blue", "red"]}
                      offset={2}
                      style={{data:{width:1.5}}}
                    >
                      <VictoryLine
                        data={manData}
                      />
                      <VictoryLine
                        data={womanData}
                      />
                    </VictoryGroup>
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

export default Unmarrid;