/*
* 点击等于号执行计算
* */
export function equalSignal(output: string, outputArr: string[]): string {
    if ( output.indexOf('+') >= 0 ) {
        // 执行加法
        return (parseFloat(outputArr[0]) + parseFloat(outputArr[1])).toFixed(2);
    } else if ( output.indexOf('-') >= 0 ) {
        // 执行减法
        return (parseFloat(outputArr[0]) - parseFloat(outputArr[1])).toFixed(2);
    }
    return 'Error';
}



export default {
    equalSignal
};