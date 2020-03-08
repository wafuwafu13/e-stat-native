import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Weight extends Component {

    render(){
        let manWeightBox = [];
        let womanWeightBox = [];
        let manWeight = [10.5, 12.1, 14.2, 15.7, 18.2, 20.4, 24.0, 26.8, 31.2, 33.3,
                     37.7, 42.1, 48.9, 51.8, 56.5, 60.1, 63.1, 60.8, 62.6, 65.7,
                     66.1, 66.5, 69.2, 69.9, 64.5, 68.3]
        let womanWeight = [9.9, 11.9, 14.1, 15.7, 18.1, 21.4, 23.3, 26.1, 30.4, 33.4,
                           38.5, 41.2, 45.5, 47.7, 47.7, 51.2, 50.0, 50.7, 50.8, 53.5,
                           50.9, 53.6, 51.8, 52.1, 50.2, 52.8]
        for(let i = 0; i <= 25; i++){
          manWeightBox.push({});
          womanWeightBox.push({});
          manWeightBox[i].x = i+1;
          womanWeightBox[i].x = i+1;
          manWeightBox[i].y = manWeight[i];
          womanWeightBox[i].y = womanWeight[i];
        }
        let tickXBox = [];
        for(let i = 1; i <= 26; i++){
          tickXBox.push(i);
        }
        let tickYBox = [];
        for(let i = 10; i <= 70; i+=5){
            tickYBox.push(i);
        }

        const manData = manWeightBox;
        const womanData = womanWeightBox
        const height = Dimensions.get('window').height;
        return(
          <ScrollView>
              <Card title="男女別平均体重 (平成28年国民健康・栄養調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
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