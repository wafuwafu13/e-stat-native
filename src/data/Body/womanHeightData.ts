import { chartData } from '../../types/chartData';

export const womanHeightData = (): Array<chartData> => {
    let womanHeightList: chartData[] = [];
    let womanHeight: number[] = [
        78.3,
        87.8,
        94.6,
        101.5,
        108.3,
        116.6,
        121.6,
        126.1,
        134.4,
        139.8,
        146.0,
        151.1,
        154.1,
        156.8,
        156.8,
        157.4,
        157.3,
        157.5,
        155.9,
        159.5,
        157.9,
        158.5,
        157.4,
        157.3,
        155.2,
        158.8
    ];
    for (let i = 0; i <= 25; i++) {
        womanHeightList.push({
            x: i + 1,
            y: womanHeight[i]
        });
    }

    return womanHeightList;
};
