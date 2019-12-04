import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';

class Weight extends Component {

    render(){
        let manWeightBox = [];
        for(let i = 0; i <= 25; i++){
            manWeightBox.push({});
        }
        manWeightBox[0].x = 1
        manWeightBox[1].x = 2
        manWeightBox[2].x = 3
        manWeightBox[3].x = 4
        manWeightBox[4].x = 5
        manWeightBox[5].x = 6
        manWeightBox[6].x = 7
        manWeightBox[7].x = 8
        manWeightBox[8].x = 9
        manWeightBox[9].x = 10
        manWeightBox[10].x = 11
        manWeightBox[11].x = 12
        manWeightBox[12].x = 13
        manWeightBox[13].x = 14
        manWeightBox[14].x = 15
        manWeightBox[15].x = 16
        manWeightBox[16].x = 17
        manWeightBox[17].x = 18
        manWeightBox[18].x = 19
        manWeightBox[19].x = 20
        manWeightBox[20].x = 21
        manWeightBox[21].x = 22
        manWeightBox[22].x = 23
        manWeightBox[23].x = 24
        manWeightBox[24].x = 25
        manWeightBox[25].x = 26

        manWeightBox[0].y = 10.5
        manWeightBox[1].y = 12.1
        manWeightBox[2].y = 14.2
        manWeightBox[3].y = 15.7
        manWeightBox[4].y = 18.2
        manWeightBox[5].y = 20.4
        manWeightBox[6].y = 24.0
        manWeightBox[7].y = 26.8
        manWeightBox[8].y = 31.2
        manWeightBox[9].y = 33.3
        manWeightBox[10].y = 37.7
        manWeightBox[11].y = 42.1
        manWeightBox[12].y = 48.9
        manWeightBox[13].y = 51.8
        manWeightBox[14].y = 56.5
        manWeightBox[15].y = 60.1
        manWeightBox[16].y = 63.1
        manWeightBox[17].y = 60.8
        manWeightBox[18].y = 62.6
        manWeightBox[19].y = 65.7
        manWeightBox[20].y = 66.1
        manWeightBox[21].y = 66.5
        manWeightBox[22].y = 69.2
        manWeightBox[23].y = 69.9
        manWeightBox[24].y = 64.5
        manWeightBox[25].y = 68.3

        let womanWeightBox = [];
        for(let i = 0; i <= 25; i++){
            womanWeightBox.push({});
        }

        womanWeightBox[0].x = 1
        womanWeightBox[1].x = 2
        womanWeightBox[2].x = 3
        womanWeightBox[3].x = 4
        womanWeightBox[4].x = 5
        womanWeightBox[5].x = 6
        womanWeightBox[6].x = 7
        womanWeightBox[7].x = 8
        womanWeightBox[8].x = 9
        womanWeightBox[9].x = 10
        womanWeightBox[10].x = 11
        womanWeightBox[11].x = 12
        womanWeightBox[12].x = 13
        womanWeightBox[13].x = 14
        womanWeightBox[14].x = 15
        womanWeightBox[15].x = 16
        womanWeightBox[16].x = 17
        womanWeightBox[17].x = 18
        womanWeightBox[18].x = 19
        womanWeightBox[19].x = 20
        womanWeightBox[20].x = 21
        womanWeightBox[21].x = 22
        womanWeightBox[22].x = 23
        womanWeightBox[23].x = 24
        womanWeightBox[24].x = 25
        womanWeightBox[25].x = 26
  
        womanWeightBox[0].y = 9.9
        womanWeightBox[1].y = 11.9
        womanWeightBox[2].y = 14.1
        womanWeightBox[3].y = 15.7
        womanWeightBox[4].y = 18.1
        womanWeightBox[5].y = 21.4
        womanWeightBox[6].y = 23.3
        womanWeightBox[7].y = 26.1
        womanWeightBox[8].y = 30.4
        womanWeightBox[9].y = 33.4
        womanWeightBox[10].y = 38.5
        womanWeightBox[11].y = 41.2
        womanWeightBox[12].y = 45.5
        womanWeightBox[13].y = 47.7
        womanWeightBox[14].y = 47.7
        womanWeightBox[15].y = 51.2
        womanWeightBox[16].y = 50.0
        womanWeightBox[17].y = 50.7
        womanWeightBox[18].y = 50.8
        womanWeightBox[19].y = 53.5
        womanWeightBox[20].y = 50.9
        womanWeightBox[21].y = 53.6
        womanWeightBox[22].y = 51.8
        womanWeightBox[23].y = 52.1
        womanWeightBox[24].y = 50.2
        womanWeightBox[25].y = 52.8

        tickXBox = [];
        for(let i = 1; i <= 26; i++){
          tickXBox.push(i);
        }
        tickYBox = [];
        tickYBox
        for(let i = 10; i <= 70; i+=5){
            tickYBox.push(i);
        }

        const manData = manWeightBox;
        const womanData = womanWeightBox
        const height = Dimensions.get('window').height;
        return(
          <ScrollView>
              <Card title="男女別平均体重 (平成28年国民健康・栄養調査)" height={height*0.95} containerStyle={{paddingTop: 20}}>
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
                        colorScale={["#3399FF", "#FF66CC"]}
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
            </ScrollView>
        )
    }
}

export default Weight;