import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryGroup } from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class WeightChart extends Component {

    constructor(props){
        super(props);
        this.state= {
          spinner: true,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
          this.setState({
            spinner: false
          })
        }, 6000)
    }

    render(){
        let manWeightList = [];
        let womanWeightList = [];
        let manWeight = [10.5, 12.1, 14.2, 15.7, 18.2, 20.4, 24.0, 26.8, 31.2, 33.3,
                     37.7, 42.1, 48.9, 51.8, 56.5, 60.1, 63.1, 60.8, 62.6, 65.7,
                     66.1, 66.5, 69.2, 69.9, 64.5, 68.3]
        let womanWeight = [9.9, 11.9, 14.1, 15.7, 18.1, 21.4, 23.3, 26.1, 30.4, 33.4,
                           38.5, 41.2, 45.5, 47.7, 47.7, 51.2, 50.0, 50.7, 50.8, 53.5,
                           50.9, 53.6, 51.8, 52.1, 50.2, 52.8]
        for(let i = 0; i <= 25; i++){
          manWeightList.push({
            x: i+1,
            y: manWeight[i]
          });
          womanWeightList.push({
            x: i+1,
            y: womanWeight[i]
          });
        }
        let tickXList = [];
        for(let i = 1; i <= 26; i++){
          tickXList.push(i);
        }
        let tickYList = [];
        for(let i = 10; i <= 70; i+=5){
            tickYList.push(i);
        }
        const manData = manWeightList;
        const womanData = womanWeightList
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
                <Spinner
                  visible={this.state.spinner}
                  textContent="読込中..."
                  textStyle={{ color: "#fff" }}
                  overlayColor="rgba(0,0,0,0.5)"
                />
                <Text style={styles.title}>
                    男女別平均体重(平成28年国民健康・栄養調査)
                </Text>
                <View style={styles.chart}>
                    <VictoryChart
                      animate={{ duration: 5000, easing: "bounce" }}
                      theme={VictoryTheme.material}
                      height={height*0.8}
                    >
                      <VictoryAxis
                 　     tickValues={tickXList}
                      />
                      <VictoryAxis dependentAxis
                        tickValues={tickYList}
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
                </View>
            </View>
        )
    }
}

export default WeightChart;