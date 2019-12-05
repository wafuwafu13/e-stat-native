import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class SumMariage extends Component {

    render(){
        let sumMariageBox = [];
        for(let i = 0; i <= 32; i++){
            sumMariageBox.push({});
        }
        sumMariageBox[0].x = 2017
        sumMariageBox[1].x = 2016
        sumMariageBox[2].x = 2015
        sumMariageBox[3].x = 2014
        sumMariageBox[4].x = 2013
        sumMariageBox[5].x = 2012
        sumMariageBox[6].x = 2011
        sumMariageBox[7].x = 2010
        sumMariageBox[8].x = 2009
        sumMariageBox[9].x = 2008
        sumMariageBox[10].x = 2007
        sumMariageBox[11].x = 2006
        sumMariageBox[12].x = 2005
        sumMariageBox[13].x = 2004
        sumMariageBox[14].x = 2003
        sumMariageBox[15].x = 2002
        sumMariageBox[16].x = 2001
        sumMariageBox[17].x = 2000
        sumMariageBox[18].x = 1995
        sumMariageBox[19].x = 1990
        sumMariageBox[20].x = 1985
        sumMariageBox[21].x = 1980
        sumMariageBox[22].x = 1975
        sumMariageBox[23].x = 1970
        sumMariageBox[24].x = 1965
        sumMariageBox[25].x = 1960
        sumMariageBox[26].x = 1955
        sumMariageBox[27].x = 1950
        sumMariageBox[28].x = 1947
        sumMariageBox[29].x = 1943
        sumMariageBox[30].x = 1940
        sumMariageBox[31].x = 1935
        sumMariageBox[32].x = 1930

        sumMariageBox[0].y = 606866
        sumMariageBox[1].y = 620531
        sumMariageBox[2].y = 635156
        sumMariageBox[3].y = 643749
        sumMariageBox[4].y = 660613
        sumMariageBox[5].y = 668869
        sumMariageBox[6].y = 661895
        sumMariageBox[7].y = 700214
        sumMariageBox[8].y = 707734
        sumMariageBox[9].y = 726106
        sumMariageBox[10].y = 719822
        sumMariageBox[11].y = 730971
        sumMariageBox[12].y = 714265
        sumMariageBox[13].y = 720417
        sumMariageBox[14].y = 740191
        sumMariageBox[15].y = 757331
        sumMariageBox[16].y = 799999
        sumMariageBox[17].y = 798138
        sumMariageBox[18].y = 791888
        sumMariageBox[19].y = 722138
        sumMariageBox[20].y = 735850
        sumMariageBox[21].y = 774702
        sumMariageBox[22].y = 941628
        sumMariageBox[23].y = 1029405
        sumMariageBox[24].y = 954852
        sumMariageBox[25].y = 866115
        sumMariageBox[26].y = 714861
        sumMariageBox[27].y = 715081
        sumMariageBox[28].y = 934170
        sumMariageBox[29].y = 743842
        sumMariageBox[30].y = 666575
        sumMariageBox[31].y = 556730
        sumMariageBox[32].y = 506674

        const data = sumMariageBox;
        const height = Dimensions.get('window').height;
        let tickBox = [];
        for(let i = 1930; i <= 2015; i+=5){
            tickBox.push(i);
        }
        return(
          <ScrollView>
              <Card title="結婚件数 (人口動態調査)" height={hp('95%')} containerStyle={{paddingTop: 20}}>
                  <VictoryChart
                   theme={VictoryTheme.material}
                   height={height*0.8}
                  >
                    <VictoryAxis
                 　   tickValues={tickBox}
                    />
                    <VictoryAxis dependentAxis
                      tickFormat={(y) => (`${y/10000}万`)}
                      tickValues={[500000,600000,700000,800000,900000,1000000,1100000]}
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