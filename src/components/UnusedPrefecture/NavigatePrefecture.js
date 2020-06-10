import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './Menu';
import Hokkaido from './Hokkaido';
import Aomori from './Aomori';
import Iwate from './Iwate';
import Miyagi from './Miyagi';
import Akita from './Akita';
import Yamagata from './Yamagata';
import Fukusima from './Fukusima';
import Ibaragi from './Ibaragi';
import Totigi from './Totigi';
import Gunma from './Gunma';
import Saitama from './Saitama';
import Tiba from './Tiba';
import Tokyo from './Tokyo';
import Kanagawa from './Kanagawa';
import Niigata from './Niigata';
import Toyama from './Toyama';
import Isikawa from './Isikawa';
import Fukui from './Fukui';
import Yamanasi from './Yamanasi';
import Nagano from  './Nagano';
import Gifu from './Gifu';
import Sizuoka from './Sizuoka';
import Aiti from './Aiti';
import Mie from './Mie';
import Siga from './Siga';
import Kyoto from './Kyoto';
import Osaka from './Osaka';
import Hyogo from './Hyogo';
import Nara from './Nara';
import Wakayama from './Wakayama';
import Tottori from './Tottori';
import Simane from './Simane';
import Okayama from './Okayama';
import Hirosima from './Hirosima'
import Yamaguti from './Yamaguti';
import Tokusima from './Tokusima';
import Kagawa from './Kagawa';
import Ehime from './Ehime';
import Kouti from './Kouti';
import Fukuoka from './Fukuoka';
import Saga from './Saga';
import Nagasaki from './Nagasaki';
import Kumamoto from './Kumamoto';
import Oita from './Oita';
import Miyazaki from './Miyazaki';
import Kagosima from './Kagosima';
import Okinawa from './Okinawa';

class NavigatePrefecture extends Component {

    render(){
        const RootStack = createStackNavigator(
            {
                Home: Menu,
                Hokkaido: Hokkaido,
                Aomori: Aomori,
                Iwate: Iwate,
                Miyagi: Miyagi,
                Akita: Akita,
                Yamagata: Yamagata,
                Fukusima: Fukusima,
                Ibaragi: Ibaragi,
                Totigi: Totigi,
                Gunma: Gunma,
                Saitama: Saitama,
                Tiba: Tiba,
                Tokyo: Tokyo,
                Kanagawa: Kanagawa,
                Niigata: Niigata,
                Toyama: Toyama,
                Isikawa: Isikawa,
                Fukui: Fukui,
                Yamanasi: Yamanasi,
                Nagano: Nagano,
                Gifu: Gifu,
                Sizuoka: Sizuoka,
                Aiti: Aiti,
                Mie: Mie,
                Siga: Siga,
                Kyoto: Kyoto,
                Osaka: Osaka,
                Hyogo: Hyogo,
                Nara: Nara,
                Wakayama: Wakayama,
                Tottori: Tottori,
                Simane: Simane,
                Okayama: Okayama,
                Hirosima: Hirosima,
                Yamaguti: Yamaguti,
                Tokusima: Tokusima,
                Kagawa: Kagawa,
                Ehime: Ehime,
                Kouti: Kouti,
                Fukuoka: Fukuoka,
                Saga: Saga,
                Nagasaki: Nagasaki,
                Kumamoto: Kumamoto,
                Oita: Oita,
                Miyazaki: Miyazaki,
                Kagosima: Kagosima,
                Okinawa: Okinawa,
            },
            {
                initialRouteName: 'Home',

                defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#000055',
                    },
                  },
            },
        );

        const AppContainer = createAppContainer(RootStack);

        return(
            <AppContainer />
        )
    }
}

export default NavigatePrefecture;