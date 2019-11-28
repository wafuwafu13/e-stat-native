import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Height extends Component {

    render(){
      let manHeightBox = [];
      for(let i = 0; i <= 25; i++){
          manHeightBox.push({});
      }
      manHeightBox[0].x = 1
      manHeightBox[1].x = 2
      manHeightBox[2].x = 3
      manHeightBox[3].x = 4
      manHeightBox[4].x = 5
      manHeightBox[5].x = 6
      manHeightBox[6].x = 7
      manHeightBox[7].x = 8
      manHeightBox[8].x = 9
      manHeightBox[9].x = 10
      manHeightBox[10].x = 11
      manHeightBox[11].x = 12
      manHeightBox[12].x = 13
      manHeightBox[13].x = 14
      manHeightBox[14].x = 15
      manHeightBox[15].x = 16
      manHeightBox[16].x = 17
      manHeightBox[17].x = 18
      manHeightBox[18].x = 19
      manHeightBox[19].x = 20
      manHeightBox[20].x = 21
      manHeightBox[21].x = 22
      manHeightBox[22].x = 23
      manHeightBox[23].x = 24
      manHeightBox[24].x = 25
      manHeightBox[25].x = 26

      manHeightBox[0].y = 79.0
      manHeightBox[1].y = 87.9
      manHeightBox[2].y = 95.1
      manHeightBox[3].y = 101.3
      manHeightBox[4].y = 108.2
      manHeightBox[5].y = 114.8
      manHeightBox[6].y = 123.2
      manHeightBox[7].y = 128.2
      manHeightBox[8].y = 133.7
      manHeightBox[9].y = 138.3
      manHeightBox[10].y = 144.7
      manHeightBox[11].y = 150.8
      manHeightBox[12].y = 160.3
      manHeightBox[13].y = 164.3
      manHeightBox[14].y = 168.6
      manHeightBox[15].y = 170.4
      manHeightBox[16].y = 170.3
      manHeightBox[17].y = 170.3
      manHeightBox[18].y = 171.3
      manHeightBox[19].y = 172.3
      manHeightBox[20].y = 172.0
      manHeightBox[21].y = 170.2
      manHeightBox[22].y = 171.4
      manHeightBox[23].y = 173.0
      manHeightBox[24].y = 170.5
      manHeightBox[25].y = 171.4

      let womanHeightBox = [];
      for(let i = 0; i <= 25; i++){
          womanHeightBox.push({});
      }

      womanHeightBox[0].x = 1
      womanHeightBox[1].x = 2
      womanHeightBox[2].x = 3
      womanHeightBox[3].x = 4
      womanHeightBox[4].x = 5
      womanHeightBox[5].x = 6
      womanHeightBox[6].x = 7
      womanHeightBox[7].x = 8
      womanHeightBox[8].x = 9
      womanHeightBox[9].x = 10
      womanHeightBox[10].x = 11
      womanHeightBox[11].x = 12
      womanHeightBox[12].x = 13
      womanHeightBox[13].x = 14
      womanHeightBox[14].x = 15
      womanHeightBox[15].x = 16
      womanHeightBox[16].x = 17
      womanHeightBox[17].x = 18
      womanHeightBox[18].x = 19
      womanHeightBox[19].x = 20
      womanHeightBox[20].x = 21
      womanHeightBox[21].x = 22
      womanHeightBox[22].x = 23
      womanHeightBox[23].x = 24
      womanHeightBox[24].x = 25
      womanHeightBox[25].x = 26

      womanHeightBox[0].y = 78.3
      womanHeightBox[1].y = 87.8
      womanHeightBox[2].y = 94.6
      womanHeightBox[3].y = 101.5
      womanHeightBox[4].y = 108.3
      womanHeightBox[5].y = 116.6
      womanHeightBox[6].y = 121.6
      womanHeightBox[7].y = 126.1
      womanHeightBox[8].y = 134.4
      womanHeightBox[9].y = 139.8
      womanHeightBox[10].y = 146.0
      womanHeightBox[11].y = 151.1
      womanHeightBox[12].y = 154.1
      womanHeightBox[13].y = 156.8
      womanHeightBox[14].y = 156.8
      womanHeightBox[15].y = 157.4
      womanHeightBox[16].y = 157.3
      womanHeightBox[17].y = 157.5
      womanHeightBox[18].y = 155.9
      womanHeightBox[19].y = 159.5
      womanHeightBox[20].y = 157.9
      womanHeightBox[21].y = 158.5
      womanHeightBox[22].y = 157.4
      womanHeightBox[23].y = 157.3
      womanHeightBox[24].y = 155.2
      womanHeightBox[25].y = 158.8

      tickBox = [];
      for(let i = 1; i <= 26; i++){
        tickBox.push(i);
      }
      
      const manData = manHeightBox;
      const womanData = womanHeightBox
      const height = Dimensions.get('window').height;
      return(
        <ScrollView>
            <Card title="身長" height={height*0.95} containerStyle={{paddingTop: 20}}>
                <VictoryChart
                 theme={VictoryTheme.material}
                 height={height*0.8}
                >
                  <VictoryAxis
               　   tickValues={tickBox}
                  />
                  <VictoryAxis dependentAxis
                    tickValues={[80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175]}
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

export default Height;