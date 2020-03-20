import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class TransitionPopulationChart extends Component {

    render(){
      let transitionPopulationBox = [];
      let transitionPopulationYear = [];
      for(let i = 1945; i <= 2015; i+=5){
        transitionPopulationYear.push(i);
      }
      transitionPopulationYear[15] = 2019;
      for(let i = 0; i <= 15; i++){
        
      }
      let transitionPopulation = [71998104, 84114574, 90076594, 94301623, 99209137, 
                                  104665171, 111939643, 117060396, 121048923, 123611167,
                                  125570246, 126925843, 127767994, 128057352, 127094745,
                                  126443000]
      for(let i = 0; i <= 15; i++){
        transitionPopulationBox.push({});
        transitionPopulationBox[i].x = transitionPopulationYear[i];
        transitionPopulationBox[i].y = transitionPopulation[i];
      }
      const data = transitionPopulationBox;
      const height = Dimensions.get('window').height;
      const styles = StyleSheet.create({
          container:{
            flex: 1,
            backgroundColor: '#CCCCCC',
            justifyContent: 'center',
            alignItems: 'center',
          },
          title:{
            fontSize: wp('3%'),
            color: '#3E3D3D',
          },
          chart:{
            marginBottom: hp('15%')
          }
      })

      return(
          <View style={styles.container}>
              <Text style={styles.title}>
                人口推移(国勢調査)
              </Text>
              <View style={styles.chart}>
              <VictoryChart style={styles.chart}
                animate={{ duration: 5000, easing: "bounce" }}
                theme={VictoryTheme.material}
                height={height*0.8}
               >
                  <VictoryAxis
              　    tickValues={[1945,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015]}
                  />
                  <VictoryAxis dependentAxis
                    tickFormat={(y) => (`${y/100000000}億`)}
                    tickValues={[70000000,80000000,90000000,100000000,110000000,120000000]}
                  />
                  <VictoryLine
                    data={data}
                    style={{ data: { stroke: "#c43a31" } }}
                  />
              </VictoryChart>
              </View>
          </View>
      )
    }
}

export default TransitionPopulationChart;