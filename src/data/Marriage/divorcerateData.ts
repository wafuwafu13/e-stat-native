import { chartData } from '../../types/chartData';

export const divorcerateData = (): Array<chartData> => {
    let divorcerateList: chartData[] = [];
    let divorcerateYear: number[] = [];

    for (let i = 2015; i >= 1930; i -= 5) {
        divorcerateYear.push(i);
    }
    divorcerateYear[14] = 1943;

    let divocerate: number[] = [
        26.3,
        26.4,
        26.8,
        24.9,
        20,
        17.9,
        18.5,
        15.5,
        11.2,
        8.5,
        7.5,
        7.4,
        9.5,
        10.5,
        6.2,
        6.8,
        8,
        9.2
    ];

    for (let i = 0; i <= 17; i++) {
        divorcerateList.push({
            x: divorcerateYear[i],
            y: divocerate[i]
        });
    }

    return divorcerateList;
};
