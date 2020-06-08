import { chartData } from '../../types/chartData';

export const womanUnmarrideData = (): Array<chartData> => {
    let womanUnmarridList: chartData[] = [];
    let UnmarridYear: number[] = [];

    for (let i = 1920; i <= 2015; i += 5) {
        if (i == 1945) continue;
        UnmarridYear.push(i);
    }

    let womanUnmarrid: number[] = [
        2.15,
        1.89,
        1.79,
        1.792,
        2,
        1.99,
        2.34,
        3.14,
        4.67,
        5.29,
        4.99,
        4.45,
        4.89,
        5.78,
        6.76,
        8.64,
        12.24,
        17.37,
        19.3
    ];

    for (let i = 0; i <= 18; i++) {
        womanUnmarridList.push({
            x: UnmarridYear[i],
            y: womanUnmarrid[i]
        });
    }

    return womanUnmarridList;
};
