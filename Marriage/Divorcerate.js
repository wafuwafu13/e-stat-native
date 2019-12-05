import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Divorcerate extends Component {

    render(){
        let divorcerateBox = [];
        for(let i = 0; i <= 17; i++){
            divorcerateBox.push({});
        }
        divorcerateBox[0].x = 2015
        divorcerateBox[1].x = 2010
        divorcerateBox[2].x = 2005
        divorcerateBox[3].x = 2000
        divorcerateBox[4].x = 1995
        divorcerateBox[5].x = 1990
        divorcerateBox[6].x = 1985
        divorcerateBox[7].x = 1980
        divorcerateBox[8].x = 1975
        divorcerateBox[9].x = 1970
        divorcerateBox[10].x = 1965
        divorcerateBox[11].x = 1960
        divorcerateBox[12].x = 1955
        divorcerateBox[13].x = 1950
        divorcerateBox[14].x = 1943
        divorcerateBox[15].x = 1940
        divorcerateBox[16].x = 1935
        divorcerateBox[17].x = 1930

        divorcerateBox[0].y = 26.3
        divorcerateBox[1].y = 26.4
        divorcerateBox[2].y = 26.8
        divorcerateBox[3].y = 24.9
        divorcerateBox[4].y = 20
        divorcerateBox[5].y = 17.9
        divorcerateBox[6].y = 18.5
        divorcerateBox[7].y = 15.5
        divorcerateBox[8].y = 11.2
        divorcerateBox[9].y = 8.5
        divorcerateBox[10].y = 7.5
        divorcerateBox[11].y = 7.4
        divorcerateBox[12].y = 9.5
        divorcerateBox[13].y = 10.5
        divorcerateBox[14].y = 6.2
        divorcerateBox[15].y = 6.8
        divorcerateBox[16].y = 8
        divorcerateBox[17].y = 9.2
        
        const data = divorcerateBox;
        const height = Dimensions.get('window').height;
        let tickBox = [];
        for(let i = 1930; i <= 2015; i+=5){
            tickBox.push(i);
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
                      tickValues={[5,10,15,20,25,30]}
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