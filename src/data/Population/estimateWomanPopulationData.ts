import { chartData } from '../../types/chartData';

export const estimateWomanPopulationData = (): Array<chartData> => {
    let estimateWomanPopulationList: chartData[] = [];
    let estimateWomanPopulationYear: number[] = [];

    for (let i = 2020; i <= 2040; i += 5) {
        estimateWomanPopulationYear.push(i);
    }
    for (let i = 2050; i <= 2080; i += 10) {
        estimateWomanPopulationYear.push(i);
    }

    let estimateWomanPopulation: number[] = [
        64428,
        63095,
        61428,
        59494,
        54999,
        50394,
        45674,
        40617,
        36291
    ];

    for (let i = 0; i <= 8; i++) {
        estimateWomanPopulationList.push({
            x: estimateWomanPopulationYear[i],
            y: estimateWomanPopulation[i]
        });
    }

    return estimateWomanPopulationList;
};
