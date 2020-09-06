import React, { useRef, useState } from 'react';
import Icon from '../Icon';
import { Button } from 'antd-mobile';
import { equalSignal, getCharCount } from 'components/Money/numberPad/numberPad';
import Wrapper from './numberPad/Wrapper';
import dayjs from 'dayjs';

type symbolTypes = '+' | '-';
type outputArrType = {
    left: string,
    right?: string,
}
type Props = {
    isOk: (note: string, amount: string) => void,
    selectedTime: Date,
    calendarShow: (isShow: boolean) => void,
}

const NumberPad: React.FC<Props> = (props) => {
    const [note, setNote] = useState('');
    const [isComputed, setIsComputed] = useState(false);
    const [output, setOutput] = useState('0.00');
    const [outputArr, setOutputArr] = useState(['0.00', '']);
    
    const refInput = useRef<HTMLInputElement>(null);
    const getInputValue = () => {
        refInput && refInput.current && setNote(refInput.current.value);
    };
    // 通过符号设置数据
    const setDataBySym = (data: symbolTypes, value: number) => {
        // 已有一个 + 号存在，判断 + 号后面是否有数字，有则计算之前的并在最后面加上 + 号
        setValue(`${ value.toFixed(2) }${ data }`, { left: `${ value.toFixed(2) }` });
    };
    // 值计算和符号替换
    const calculate = (data: symbolTypes): void => {
        // 停止加入左边，开始加入右边
        // 点击加号后将+字符串放入 output，
        if ( outputArr[1].length >= 1 ) {
            if ( output.indexOf('+') >= 0 ) {
                const result = parseFloat((parseFloat(outputArr[0]) + parseFloat(outputArr[1])).toFixed(2));
                setDataBySym(data, result);
            } else if ( output.indexOf('-') >= 0 ) {
                // 本身是减法，要先减了再做其他的
                const result = parseFloat((parseFloat(outputArr[0]) - parseFloat(outputArr[1])).toFixed(2));
                setDataBySym(data, result);
            }
        } else {
            setValue(output.substr(0, output.length - 1) + data, { left: '' });
        }
    };
    
    // 控制小数点
    function controlPoint(value: string) {
        // 左值长度大于 8
        if ( String(outputArr[0]).indexOf('.') >= 0 ) {
            // 符号是 . ，判断是否已经存在过 . 了
            // 左边有小数了，那么看看右边是否有数据，没有则返回
            if ( outputArr[1].length < 1 ) {
                // 右边没有值
                return;
            } else if ( String(outputArr[1]).indexOf('.') >= 0 ) {
                // 右边含有小数
                return;
            } else {
                // 给右边设置数据
                setValue(output + value, { left: outputArr[0], right: outputArr[1] + value }, true);
            }
        } else {
            const result = output + value;
            // 如果有符号了，则只赋值右值
            if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
                if ( outputArr[1].length < 1 ) {
                    return;
                } else if ( outputArr[1].indexOf('.') >= 0 ) {
                    return;
                } else {
                    setValue(result, { left: outputArr[0], right: outputArr[1] + value }, true);
                }
            } else {
                setValue(result, { left: outputArr[0] + value });
            }
        }
    }
    
    // 控制 0 的个数
    function controlOfZero(value: string) {
        // 阻止右值第一次输入0后还输入其他值，只允许输入小数
        if ( outputArr[1].length > 1 && value === '0' && outputArr[1].indexOf('.') === -1 ) {
            return;
        } else if ( outputArr[1].length === 1 && outputArr[1][0] === '0' ) {
            // 第一个数是0，则替换掉
            const result = output.substr(0, output.length - 1) + value;
            setValue(result, { left: outputArr[0], right: value }, true);
            return;
        }
        // 不是加减号，则数字继续向后添加
        const result = output + value;
        setValue(result, { left: outputArr[0], right: outputArr[1] + value }, true);
    }
    
    /*
    * 设置state的值
    *
    * param1:设置output的值
    *
    * param2:设置outputArr的值,如不设置outputArr的值，需给left赋空值
    *
    * param3:控制完成按钮的变换,true显示'=',false显示'完成'
    * */
    function setValue(outputValue: string, outputArrValue: outputArrType, isComputed?: boolean) {
        const { left, right = '' } = outputArrValue;
        setOutput(outputValue);
        left && setOutputArr([left, right]);
        isComputed ? setIsComputed(true) : setIsComputed(false);
    }
    
    /*
    * 执行数据面板退格操作
    * */
    function backspace(): void {
        // 操作 output ，有运算符，则以运算符拆分后分别将内容防止 outputArr 内
        const result = output.substr(0, output.length - 1);
        if ( result.indexOf('+') >= 0 ) {
            const outputArrResult: string[] = result.split('+');
            const isTrue = outputArrResult[1].length > 0;
            setValue(result, { left: outputArrResult[0], right: outputArrResult[1] }, isTrue);
        } else if ( result.indexOf('-') >= 0 ) {
            const outputArrResult: string[] = result.split('-');
            const isTrue = outputArrResult[1].length > 0;
            setValue(result, { left: outputArrResult[0], right: outputArrResult[1] }, isTrue);
        } else if ( result.length < 1 ) {
            setValue('0.00', { left: '0' });
        } else {
            setValue(result, { left: result });
        }
    }
    
    /*
    * 数字1 - 9和 '. + -' 符号通用判断逻辑
    * */
    function generalLogic(value: string): void {
        if ( outputArr[0].length < 10 ) {
            // 左边大于10，有符号则开始算
            if ( output === '0.00' ) {
                // 在 0.00 的情况下，直接输入 . 则什么都不做
                if ( value === '.' || value === '+' || value === '-' ) {
                    return;
                }
                setValue(value, { left: value });
            } else if ( value === '.' ) {
                // 左值长度大于 8
                if ( outputArr[0].length >= 8 ) {
                    return;
                } else {
                    controlPoint(value);
                }
            } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
                // 输入的是加减号，执行计算
                if ( value === '+' || value === '-' ) {
                    calculate(value);
                } else if ( outputArr[1].split('.')[1]?.length >= 2 ) {
                    // 阻止右侧小数精度超过小数点后2位
                    return;
                } else {
                    controlOfZero(value);
                }
            } else {
                // 处理左值小数点过长的问题
                if ( outputArr[0].split('.')[1]?.length >= 2 ) {
                    // 解决左边输入小数超过2个精度的问题
                    // 是符号就在后面加上符号，不是符号则禁止输入
                    if ( value === '+' || value === '-' ) {
                        setValue(output + value, { left: '' });
                    } else {
                        return;
                    }
                }
                
                // 处理左侧没有小数点时连续输入 0 的情况
                if ( outputArr[0].length === 1 && outputArr[0][0] === '0' ) {
                    // 如果第一个数是0，进来了操作符，那么就追加数据，不替换，也不改变数组内数据
                    if ( value === '+' || value === '-' ) {
                        const result = output + value;
                        setValue(result, { left: '' });
                    } else {
                        // 第一个数是0，则替换掉
                        const result = output.substr(0, output.length - 1) + value;
                        setValue(result, { left: result });
                    }
                    return;
                }
                // 解决左值输入 0.00 时和其他其他判断逻辑发生冲突的问题
                let result = output + value;
                if ( result === '0.00' ) {
                    result = '0';
                }
                setValue(result, { left: result });
            }
        } else if ( output.length >= 20 ) {
            // 超长数不再继续允许继续输入
            if ( value === '+' || value === '-' ) {
                calculate(value);
            } else {
                return;
            }
        } else if ( value === '.' ) {
            // 控制小数点
            controlPoint(value);
        } else if ( value === '+' || value === '-' ) {
            // 必须在判断符号前执行这里的判断
            calculate(value);
        } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
            // 此处控制左值长度大于10时的右值输入
            if ( outputArr[1].split('.')[1]?.length >= 2 ) {
                // 阻止右侧小数精度超过小数点后2位
                return;
            } else {
                controlOfZero(value);
            }
        }
    }
    
    const buttonDelegation = (e: React.MouseEvent) => {
        const text = (e.target as HTMLLinkElement).textContent;
        let value = text?.replace(/\s{1}/, '');
        if ( value ) {
            if ( getCharCount(value, '-') >= 2 ) {
                value = '今天';
            }
        }
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
            case '+':
            case '-':
                generalLogic(value);
                break;
            case '=':
                const result = equalSignal(output, outputArr);
                setValue(result, { left: result });
                break;
            case '':
                backspace();
                break;
            case '今天':
                props.calendarShow(true);
                break;
            case '完成':
                // 这个逻辑表示用户输入的数据都已完成，可以记录这一笔数据到数据库中
                // 去 outputArr[0]中的数据来保存，为了防止意外，判断判断是否含有运算符，有则删除
                let amount = outputArr[0];
                if ( amount.indexOf('+') >= 0 || amount.indexOf('-') >= 0 ) {
                    amount = amount.slice(amount.length - 1);
                }
                props.isOk(note, amount);
                break;
            
        }
    };
    return (
        <Wrapper>
            <header>
                <label>
                    <Icon name="notes" />
                    <span>备注：</span>
                    <input type="text"
                           defaultValue={ note }
                           ref={ refInput }
                           onBlur={ getInputValue }
                           placeholder="点击写备注..." />
                </label>
                <div style={ { fontFamily: 'monospace' } }>{ output }</div>
            </header>
            <main onClick={ buttonDelegation }>
                <Button activeClassName="activeBtn" className="btn">7</Button>
                <Button activeClassName="activeBtn" className="btn">8</Button>
                <Button activeClassName="activeBtn" className="btn">9</Button>
                <Button activeClassName="activeBtn" className='btn'>
                    { dayjs(props.selectedTime).format('YYYY-MM-DD') === dayjs(new Date()).format('YYYY-MM-DD') ?
                        <Icon name='date' style={ { width: '1.4em', height: '1.4em' } } /> :
                        dayjs(props.selectedTime).format('YYYY-MM-DD') }
                    { dayjs(props.selectedTime).format('YYYY-MM-DD') === dayjs(new Date()).format('YYYY-MM-DD') ? '今天' : '' }
                </Button>
                <Button activeClassName="activeBtn" className="btn">4</Button>
                <Button activeClassName="activeBtn" className="btn">5</Button>
                <Button activeClassName="activeBtn" className="btn">6</Button>
                <Button activeClassName="activeBtn" className="btn">-</Button>
                <Button activeClassName="activeBtn" className="btn">1</Button>
                <Button activeClassName="activeBtn" className="btn">2</Button>
                <Button activeClassName="activeBtn" className="btn">3</Button>
                <Button activeClassName="activeBtn" className="btn">+</Button>
                <Button activeClassName="activeBtn" className="btn">.</Button>
                <Button activeClassName="activeBtn" className="btn">0</Button>
                <Button activeClassName="activeBtn" className="btn"
                        icon={ <Icon name="delete"
                                     style={ {
                                         width: '1.4em',
                                         height: '1.4em'
                                     } } /> }>
                </Button>
                <Button activeClassName="activeBtn" className="btn">{ isComputed ? '=' : '完成' }</Button>
            </main>
        </Wrapper>
    );
};

export default NumberPad;