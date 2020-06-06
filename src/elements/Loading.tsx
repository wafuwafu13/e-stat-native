import React from 'react';
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay';

type Props = {
    visible: any
}

const Loading: React.FC<Props> = props => {

    const { visible } = props

    return(
        <Spinner
          visible={visible}
          textContent="読込中..."
          textStyle={{ color: "#fff" }}
          overlayColor="rgba(0,0,0,0.5)"
        />
    )
}

export default Loading