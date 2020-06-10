import { chartData } from '../../types/chartData';

export const estimateSumPopulationData = (): Array<chartData> => {
    let estimateSumPopulationList: chartData[] = [];
    let estimateSumPopulationYear: number[] = [];

    for (let i = 2020; i <= 2040; i += 5) {
        estimateSumPopulationYear.push(i);
    }
    for (let i = 2050; i <= 2080; i += 10) {
        estimateSumPopulationYear.push(i);
    }

    let estimateSumPopulation: number[] = [
        125325,
        122544,
        119125,
        115216,
        106421,
        97441,
        88077,
        78564,
        70381
    ];

    for (let i = 0; i <= 8; i++) {
        estimateSumPopulationList.push({
            x: estimateSumPopulationYear[i],
            y: estimateSumPopulation[i]
        });
    }

    return estimateSumPopulationList;
};
