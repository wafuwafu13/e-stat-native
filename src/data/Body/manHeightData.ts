import { chartData } from '../../types/chartData';

export const manHeightData = (): Array<chartData> => {
    let manHeightList: chartData[] = [];
    let manHeight: number[] = [
        79.0,
        87.9,
        95.1,
        101.3,
        108.2,
        114.8,
        123.2,
        128.2,
        133.7,
        138.3,
        144.7,
        150.8,
        160.3,
        164.3,
        168.6,
        170.4,
        170.3,
        170.3,
        171.3,
        172.3,
        172.0,
        170.2,
        171.4,
        173.0,
        170.5,
        171.4
    ];
    for (let i = 0; i <= 25; i++) {
        manHeightList.push({
            x: i + 1,
            y: manHeight[i]
        });
    }

    return manHeightList;
};
