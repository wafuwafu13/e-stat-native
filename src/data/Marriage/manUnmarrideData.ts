import { chartData } from '../../types/chartData';

export const manUnmarrideData = (): Array<chartData> => {
    let manUnmarridList: chartData[] = [];
    let UnmarridYear: number[] = [];

    for (let i = 1920; i <= 2015; i += 5) {
        if (i == 1945) continue;
        UnmarridYear.push(i);
    }

    let manUnmarrid: number[] = [
        2.82,
        2.26,
        2.433,
        2.425,
        2.73,
        1.88,
        1.73,
        2.03,
        2.44,
        2.82,
        3.66,
        4.75,
        7.44,
        11.78,
        16.51,
        18.69,
        22.7,
        28.6,
        29.96
    ];

    for (let i = 0; i <= 18; i++) {
        manUnmarridList.push({
            x: UnmarridYear[i],
            y: manUnmarrid[i]
        });
    }

    return manUnmarridList;
};
