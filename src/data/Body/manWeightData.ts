import { chartData } from '../../types/chartData';

export const manWeightData = (): Array<chartData> => {
    let manWeightList: chartData[] = [];
    let manWeight: number[] = [
        10.5,
        12.1,
        14.2,
        15.7,
        18.2,
        20.4,
        24.0,
        26.8,
        31.2,
        33.3,
        37.7,
        42.1,
        48.9,
        51.8,
        56.5,
        60.1,
        63.1,
        60.8,
        62.6,
        65.7,
        66.1,
        66.5,
        69.2,
        69.9,
        64.5,
        68.3
    ];
    for (let i = 0; i <= 25; i++) {
        manWeightList.push({
            x: i + 1,
            y: manWeight[i]
        });
    }

    return manWeightList;
};
