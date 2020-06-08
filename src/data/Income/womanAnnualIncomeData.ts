import { chartData } from '../../types/chartData';

export const womanAnnualIncomeData = (): Array<chartData> => {
    let womanAnnualIncomeList: chartData[] = [];
    let AnnualIncomeAge: number[] = [];

    for (let i = 17; i <= 72; i += 5) {
        AnnualIncomeAge.push(i);
    }

    let womanAnnualIncome: number[] = [
        1062000,
        2407000,
        3089000,
        3147000,
        2999000,
        3017000,
        2994000,
        2958000,
        2877000,
        2283000,
        1949000,
        2066000
    ];

    for (let i = 0; i <= 11; i++) {
        womanAnnualIncomeList.push({
            x: AnnualIncomeAge[i],
            y: womanAnnualIncome[i]
        });
    }

    return womanAnnualIncomeList;
};
