import { chartData } from '../../types/chartData';

export const sumSuicideData = (): Array<chartData> => {
    let sumSuicideList: chartData[] = [];
    let sumSuicideMonth: number[] = [];

    for (let i = 1; i <= 12; i += 1) {
        sumSuicideMonth.push(i);
    }

    let sumSuicide: number[] = [
        81.5,
        80.8,
        97.4,
        103.2,
        100.3,
        95.5,
        90.2,
        86.9,
        83.8,
        81,
        81.2,
        73.5
    ];

    for (let i = 0; i <= 11; i++) {
        sumSuicideList.push({
            x: sumSuicideMonth[i],
            y: sumSuicide[i]
        });
    }

    return sumSuicideList;
};
