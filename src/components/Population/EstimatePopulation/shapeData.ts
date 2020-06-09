export const shapeData = (data: number) => {
    let tmpNum: string = String(data);
    let a: string = tmpNum.slice(0, -1);
    let b: string = ',';
    let c: string = tmpNum.slice(-1);
    let num: string = a + b + c;

    return num;
};
