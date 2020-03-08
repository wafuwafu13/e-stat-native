import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class SumMariage extends Component {

    render(){
        let sumMariageBox = [];
        let sumMariageYear = [];
        for(let i = 2017; i >= 2000; i--){
            sumMariageYear.push(i);
        }
        for(let i = 1995; i >= 1950; i-=5){
            sumMariageYear.push(i);
        }
        sumMariageYear[28] = 1947;
        sumMariageYear[29] = 1943;
        for(let i = 1940; i >= 1930; i-=5){
            sumMariageYear.push(i);
        }
        let sumMariage = [606866, 620531, 635156, 643749, 660613, 668869, 661895, 700214, 707734, 726106,
                          719822, 730971, 714265, 720417, 740191, 757331, 799999, 798138, 791888, 722138,
                          735850, 774702, 941628, 1029405, 954852, 866115, 714861, 715081, 934170, 743842,
                          666575, 556730, 506674]
        for(let i = 0; i <= 32; i++){
            sumMariageBox.push({});
            sumMariageBox[i].x = sumMariageYear[i];
            sumMariageBox[i].y = sumMariage[i];
        }
        const data = sumMariageBox;
        const height = Dimensions.get('window').height;
        let tickXBox = [];
        for(let i = 1930; i <= 2015; i+=5){
            tickXBox.push(i);
        }
        let tickYBox = [];
        for(let i = 500000; i <= 1100000; i+=100000){
            tickYBox.push(i);
        }
        return(
          <ScrollView>
              <Card title="結婚件数 (人口動態調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
                  <VictoryChart
                   theme={VictoryTheme.material}
                   height={height*0.8}
                  >
                    <VictoryAxis
                 　   tickValues={tickXBox}
                    />
                    <VictoryAxis dependentAxis
                      tickFormat={(y) => (`${y/10000}万`)}
                      tickValues={tickYBox}
                    />
                        <VictoryScatter
                          data={data}
                          style={{data: {fill: "gold"}}}
                          size={5}
                        />
                   </VictoryChart>
               </Card>
            </ScrollView>
        )
    }
}

export default SumMariage;