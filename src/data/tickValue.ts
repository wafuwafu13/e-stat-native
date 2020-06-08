export const tickValue = (start: number, end: number, range: number): number[] => {
    let tickValueList: number[] = [];
    for (let i = start; i <= end; i += range) {
        tickValueList.push(i);
    }

    return tickValueList;
};
