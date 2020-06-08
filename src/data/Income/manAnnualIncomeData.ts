import { chartData } from '../../types/chartData';

export const manAnnualIncomeData = (): Array<chartData> => {
    let manAnnualIncomeList: chartData[] = [];
    let AnnualIncomeAge: number[] = [];

    for (let i = 17; i <= 72; i += 5) {
        AnnualIncomeAge.push(i);
    }

    let manAnnualIncome: number[] = [
        1572000,
        2745000,
        3827000,
        4567000,
        5117000,
        5629000,
        6327000,
        6609000,
        6493000,
        4794000,
        3871000,
        3677000
    ];

    for (let i = 0; i <= 11; i++) {
        manAnnualIncomeList.push({
            x: AnnualIncomeAge[i],
            y: manAnnualIncome[i]
        });
    }

    return manAnnualIncomeList;
};
