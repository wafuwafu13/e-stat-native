import React, { Component } from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Unmarrid extends Component {

    render(){
      let manUnmarridBox = [];
      let womanUnmarridBox = [];
      let UnmarridYear = [];
      for(let i = 1920; i <= 2015; i+=5){
        if(i == 1945) continue;
        UnmarridYear.push(i);
      }
      let manUnmarrid = [2.82, 2.26, 2.433, 2.425, 2.73, 1.88, 1.73, 2.03, 2.44, 2.82,
                         3.66, 4.75, 7.44, 11.78, 16.51, 18.69, 22.70, 28.6, 29.96]
      let womanUnmarrid = [2.15, 1.89, 1.79, 1.792, 2, 1.99, 2.34, 3.14, 4.67, 5.29,
                           4.99, 4.45, 4.89, 5.78, 6.76, 8.64, 12.24, 17.37, 19.3]
      for(let i = 0; i <= 18; i++){
        manUnmarridBox.push({});
        womanUnmarridBox.push({});
        manUnmarridBox[i].x = UnmarridYear[i];
        womanUnmarridBox[i].x = UnmarridYear[i];
        manUnmarridBox[i].y = manUnmarrid[i];
        womanUnmarridBox[i].y = womanUnmarrid[i];
      }
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
            <Card title="40~45歳男女の未婚率 (国勢調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
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

export default Unmarrid;