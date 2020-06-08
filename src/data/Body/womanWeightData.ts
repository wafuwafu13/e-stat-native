import { chartData } from '../../types/chartData';

export const womanWeightData = (): Array<chartData> => {
    let womanWeightList: chartData[] = [];
    let womanWeight: number[] = [
        9.9,
        11.9,
        14.1,
        15.7,
        18.1,
        21.4,
        23.3,
        26.1,
        30.4,
        33.4,
        38.5,
        41.2,
        45.5,
        47.7,
        47.7,
        51.2,
        50.0,
        50.7,
        50.8,
        53.5,
        50.9,
        53.6,
        51.8,
        52.1,
        50.2,
        52.8
    ];

    for (let i = 0; i <= 25; i++) {
        womanWeightList.push({
            x: i + 1,
            y: womanWeight[i]
        });
    }

    return womanWeightList;
};
