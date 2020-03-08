import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Divorcerate extends Component {

    render(){
        let divorcerateBox = [];
        let divorcerateYear = [];
        for(let i = 2015; i >=　1930; i-=5){
            divorcerateYear.push(i);
        }
        divorcerateYear[14] = 1943;
        let divocerate = [26.3, 26.4, 26.8, 24.9, 20, 17.9, 18.5, 15.5, 11.2, 8.5,
                          7.5, 7.4, 9.5, 10.5, 6.2, 6.8, 8, 9.2];
        for(let i = 0; i <= 17; i++){
            divorcerateBox.push({});
            divorcerateBox[i].x = divorcerateYear[i];
            divorcerateBox[i].y = divocerate[i];
        }
        const data = divorcerateBox;
        const height = Dimensions.get('window').height;
        let tickBox = [];
        for(let i = 1930; i <= 2015; i+=5){
            tickBox.push(i);
        }
        let tickValuesBox = [];
        for(let i = 5; i <= 30; i+=5){
            tickValuesBox.push(i);
        }
        return(
          <ScrollView>
              <Card title="離婚率 (人口動態調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
                  <VictoryChart
                   theme={VictoryTheme.material}
                   height={height*0.8}
                  >
                    <VictoryAxis
                 　   tickValues={tickBox}
                    />
                    <VictoryAxis dependentAxis
                      tickValues={tickValuesBox}
                    />
                        <VictoryLine
                          data={data}
                          style={{data: {stroke: "purple"}}}
                        />
                   </VictoryChart>
               </Card>
            </ScrollView>
        )
    }
}

export default Divorcerate;