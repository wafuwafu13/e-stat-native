import React, { Component } from 'react';
import { StyleSheet, View,  Text, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class DivorcerateChart extends Component {

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
        }, 5000)
    }

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
                    離婚率(人口動態調査)
                </Text>
                <View style={styles.chart}>
                    <VictoryChart
                     theme={VictoryTheme.material}
                     height={height*0.8}
                     animate={{ duration: 5000, easing: "bounce" }}
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
                </View>
            </View>
        )
    }
}

export default DivorcerateChart;