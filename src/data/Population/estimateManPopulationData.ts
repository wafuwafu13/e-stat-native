import { chartData } from '../../types/chartData';

export const estimateManPopulationData = (): Array<chartData> => {
    let estimateManPopulationList: chartData[] = [];
    let estimateManPopulationYear: number[] = [];

    for (let i = 2020; i <= 2040; i += 5) {
        estimateManPopulationYear.push(i);
    }
    for (let i = 2050; i <= 2080; i += 10) {
        estimateManPopulationYear.push(i);
    }

    let estimateManPopulation: number[] = [
        60897,
        59449,
        57697,
        55721,
        51423,
        47047,
        42402,
        37947,
        34090
    ];

    for (let i = 0; i <= 8; i++) {
        estimateManPopulationList.push({
            x: estimateManPopulationYear[i],
            y: estimateManPopulation[i]
        });
    }

    return estimateManPopulationList;
};
