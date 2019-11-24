import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isLoaded: true,
      error: null,
      populations: [],
    }
  }

  componentWillMount() {

    let APP_ID = "857f6df73c559e37a4dabc4d2b7eb090d8b9893d"
    let API_URL = "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData"
    let statsDataId ="0003312312"
    let GET_URL = API_URL;
    GET_URL += "?appId=" + escape(APP_ID);
    GET_URL += "&statsDataId=" + escape(statsDataId);

    axios.get(GET_URL)
    .then(
      (result) =>{
        let populationBox = [];
        let sumStart = 1;
        let sumEnd = 99;
        //console.log(result);
        for(let i = 0; i <= 98; i++){
          populationBox.push({});
        };
        for(let i = sumStart; i <= sumEnd; i++){
          populationBox[i-sumStart].総人口 = Number(result.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$)
        };
        this.setState({
          isLoaded: true,
          populations: populationBox,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        })
      },
     )
   }

   render(){
     const { error, isLoaded } = this.state;
     const data = this.state.populations;
     //console.log(data);
     if(error){
       return <Text>Error: {error.message}</Text>;
     } else if (!isLoaded) {
       return <Text>Loading...</Text>;
     } else {
       return(
         <Text>hoge</Text>
       )
       }
   }
}

export default App;