/*
* 点击等于号执行计算
* */

export const equalSignal = (output: string, outputArr: string[]): string =>  {
    if ( output.indexOf('+') >= 0 ) {
        // 执行加法
        return (parseFloat(outputArr[0]) + parseFloat(outputArr[1])).toFixed(2);
    } else if ( output.indexOf('-') >= 0 ) {
        // 执行减法
        return (parseFloat(outputArr[0]) - parseFloat(outputArr[1])).toFixed(2);
    }
    return 'Error';
}

/*
* 获取字符在字符串中的个数
* */
export const getCharCount = (str: string,char: string): number => {
    const regex = new RegExp(char, 'g'); // 使用g表示整个字符串都要匹配
    const result = str.match(regex);          //match方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    return !result ? 0 : result.length;
}
