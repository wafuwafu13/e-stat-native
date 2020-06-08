import { chartData } from '../../types/chartData';

export const transitionPopulationData = (): Array<chartData> => {
    let transitionPopulationList: chartData[] = [];
    let transitionPopulationYear: number[] = [];

    for (let i = 1945; i <= 2015; i += 5) {
        transitionPopulationYear.push(i);
    }
    transitionPopulationYear[15] = 2019;

    let transitionPopulation: number[] = [
        71998104,
        84114574,
        90076594,
        94301623,
        99209137,
        104665171,
        111939643,
        117060396,
        121048923,
        123611167,
        125570246,
        126925843,
        127767994,
        128057352,
        127094745,
        126443000
    ];

    for (let i = 0; i <= 15; i++) {
        transitionPopulationList.push({
            x: transitionPopulationYear[i],
            y: transitionPopulation[i]
        });
    }

    return transitionPopulationList;
};
