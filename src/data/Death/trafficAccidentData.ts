import { chartData } from '../../types/chartData';

export const trafficAccidentData = (): Array<chartData> => {
    let trafficAccidentList: chartData[] = [];
    let trafficAccidentYear: number[] = [];

    for (let i = 2005; i <= 2019; i += 1) {
        trafficAccidentYear.push(i);
    }

    let trafficAccident: number[] = [
        6937,
        6415,
        5796,
        5209,
        4979,
        4948,
        4691,
        4438,
        4388,
        4113,
        4117,
        3904,
        3694,
        3532,
        3215
    ];

    for (let i = 0; i <= 14; i++) {
        trafficAccidentList.push({
            x: trafficAccidentYear[i],
            y: trafficAccident[i]
        });
    }

    return trafficAccidentList;
};
