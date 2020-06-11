import { chartData } from '../../types/chartData';

export const manSuicideData = (): Array<chartData> => {
    let manSuicideList: chartData[] = [];
    let manSuicideMonth: number[] = [];

    for (let i = 1; i <= 12; i += 1) {
        manSuicideMonth.push(i);
    }

    let manSuicide: number[] = [60.4, 58.1, 71.8, 75.6, 73.4, 69, 65.3, 62.3, 61.6, 59, 59.1, 53.4];

    for (let i = 0; i <= 11; i++) {
        manSuicideList.push({
            x: manSuicideMonth[i],
            y: manSuicide[i]
        });
    }

    return manSuicideList;
};
