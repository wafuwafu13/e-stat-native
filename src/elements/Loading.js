import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';


class Loading extends Component{

    render(){

        const { visible } = this.props

        return(
            <Spinner
              visible={visible}
              textContent="読込中..."
              textStyle={{ color: "#fff" }}
              overlayColor="rgba(0,0,0,0.5)"
            />
        )
    }
}

export default Loading