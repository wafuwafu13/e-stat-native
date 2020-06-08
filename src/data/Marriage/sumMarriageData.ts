import { chartData } from '../../types/chartData';

export const sumMarriageData = (): Array<chartData> => {
    let sumMariageList: chartData[] = [];
    let sumMariageYear: number[] = [];

    for (let i = 2017; i >= 2000; i--) {
        sumMariageYear.push(i);
    }
    for (let i = 1995; i >= 1950; i -= 5) {
        sumMariageYear.push(i);
    }
    sumMariageYear[28] = 1947;
    sumMariageYear[29] = 1943;
    for (let i = 1940; i >= 1930; i -= 5) {
        sumMariageYear.push(i);
    }

    let sumMariage: number[] = [
        606866,
        620531,
        635156,
        643749,
        660613,
        668869,
        661895,
        700214,
        707734,
        726106,
        719822,
        730971,
        714265,
        720417,
        740191,
        757331,
        799999,
        798138,
        791888,
        722138,
        735850,
        774702,
        941628,
        1029405,
        954852,
        866115,
        714861,
        715081,
        934170,
        743842,
        666575,
        556730,
        506674
    ];

    for (let i = 0; i <= 32; i++) {
        sumMariageList.push({
            x: sumMariageYear[i],
            y: sumMariage[i]
        });
    }

    return sumMariageList;
};
