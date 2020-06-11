import { chartData } from '../../types/chartData';

export const womanSuicideData = (): Array<chartData> => {
    let womanSuicideList: chartData[] = [];
    let womanSuicideMonth: number[] = [];

    for (let i = 1; i <= 12; i += 1) {
        womanSuicideMonth.push(i);
    }

    let womanSuicide: number[] = [
        21.1,
        22.8,
        25.6,
        27.6,
        27,
        26.4,
        24.9,
        24.6,
        22.3,
        21.9,
        22.1,
        20.1
    ];

    for (let i = 0; i <= 11; i++) {
        womanSuicideList.push({
            x: womanSuicideMonth[i],
            y: womanSuicide[i]
        });
    }

    return womanSuicideList;
};
