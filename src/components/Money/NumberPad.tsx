import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { Button } from 'antd-mobile';

const Wrapper = styled.div`
    max-width: 100vw;
    font-size: 14px;
    background-color: #f2f3f5;
   
    // 备注和金额
    > header {
        display: flex;
        box-shadow: 0 -.5px 1px 0 rgba(210,210,211,0.5);
        label {
            flex: 1;
            display: flex;
            align-items: center;
            width: 50%;
            padding: 10px 5px;
            box-sizing: border-box;
            overflow: hidden;
            svg {
                flex-shrink: 0;
            }
            
            > span {
                flex-shrink: 0;
            }
            
            > input {
                border: none;
                outline: none;
                font-size: 14px;
                background: inherit;
                margin-bottom: 1.5px;
                // 解除 input 的默认宽度
                min-width: 0;
                
                &::-webkit-input-placeholder {
                    line-height: normal;
                }
                &::-ms-input-placeholder {
                    line-height: normal;
                }
            }
        }
        
        > div {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 15px;
            padding: 10px 5px;
        }
    }
    
    // 数字键盘
    > main {
        display: flex;
        flex-wrap: wrap;
        > .btn {
            width: 25%;
            
            border-radius: 0;
            background-color: inherit;
            // 圆角被按钮的before控制
            &::before {
                border-radius: 0;
                border-width: .25px;
                border-color: #ccc;
            }
            
            &:nth-child(4),&:nth-child(15) {
                > div,span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                }
            }
            &:nth-child(16) {
                background: rgba(5,200,245);
            }
            
            &.activeBtn {
                background: #e1e1e1;
            }
        }
    }
    
`;
type symbolTypes = '+' | '-';
const NumberPad = (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [note, setNote] = useState('');
    const refInput = useRef<HTMLInputElement>(null);
    const getInputValue = () => {
        console.log(refInput?.current?.value);
    };
    
    const [isComputed, setIsComputed] = useState(false);
    const [output, setOutput] = useState('0.00');
    const [outputArr, setOutputArr] = useState(['', '']);
    // 通过符号设置数据
    const setDataBySym = (data: symbolTypes, value: number) => {
        // 已有一个 + 号存在，判断 + 号后面是否有数字，有则计算之前的并在最后面加上 + 号
        setOutputArr([`${ value.toFixed(2) }`, '']);
        setOutput(`${ value.toFixed(2) }${ data }`);
    };
    // 值计算和符号替换
    const calculate = (data: symbolTypes): void => {
        // 停止加入左边，开始加入右边
        // 点击加号后将+字符串放入 output，
        console.log('outputarr================');
        console.log(outputArr);
        console.log('outputarr================');
        if ( outputArr[1].length >= 1 ) {
            if ( output.indexOf('+') >= 0 ) {
                const left = parseFloat(outputArr[0]);
                console.log('left============');
                console.log(left);
                console.log('left============');
                
                console.log('right============');
                const right = parseFloat(outputArr[1]);
                console.log(right);
                console.log('right============');
                // const result = parseFloat((parseFloat(outputArr[0]) + parseFloat(outputArr[1])).toFixed(2));
                let amount = left + right;
                const result = amount.toFixed(2);
                amount = parseFloat(result);
                
                console.log(amount);
                setDataBySym(data, amount);
            } else if ( output.indexOf('-') >= 0 ) {
                // 本身是减法，要先减了再做其他的
                const result = parseFloat((parseFloat(outputArr[0]) - parseFloat(outputArr[1])).toFixed(2));
                console.log(result);
                setDataBySym(data, result);
            }
        } else {
            console.log('替换');
            setOutput(output.substr(0, output.length - 1) + data);
        }
    };
    const buttonDelegation = (e: React.MouseEvent) => {
        const text = (e.target as HTMLLinkElement).textContent;
        const value = text?.replace(/\s{1}/, '');
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
                if ( outputArr[0].length < 10 ) {
                    // 左边大于10，有符号则开始算
                    if ( output === '0.00' ) {
                        // 在 0.00 的情况下，直接输入 . 则什么都不做
                        if ( value === '.' || value === '+' || value === '-') {
                            return;
                        }
                        setOutput(value);
                        setOutputArr([value, '']);
                    } else if ( value === '.' ) {
                        // 左值长度大于 8
                        if ( outputArr[0].length >= 8 ) {
                            return;
                        } else if ( String(outputArr[0]).indexOf('.') >= 0 ) {
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
                                console.log('...=================');
                                setOutput(output + value);
                                console.log('...=================');
                                setOutputArr([outputArr[0], outputArr[1] + value]);
                            }
                        } else {
                            const result = output + value
                            // 如果有符号了，则只赋值右值
                            if(output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
                                if(outputArr[1].length < 1) {
                                    return;
                                }else if(outputArr[1].indexOf('.') >= 0) {
                                        return;
                                } else {
                                    console.log('...=================');
                                    console.log(result);
                                    console.log('...=================');
                                    setOutput(result);
                                    setOutputArr([outputArr[0],outputArr[1]+value])
                                }
                            }else {
                                setOutput(result);
                                setOutputArr([outputArr[0] + value, '']);
                            }
                        }
                    } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
                        // 输入的是加减号，执行计算
                        if ( value === '+' || value === '-' ) {
                            calculate(value);
                        } else if ( outputArr[1].split('.')[1]?.length >= 2 ) {
                            // 阻止右侧小数精度超过小数点后2位
                            return;
                        } else {
                            // 阻止右值第一次输入0后还输入其他值，只允许输入小数
                            if ( outputArr[1].length >= 1 && value === '0' && outputArr[1].indexOf('.') === -1 ) {
                                return;
                            } else if ( outputArr[1].length === 1 && outputArr[1][0] === '0' ) {
                                // 第一个数是0，则替换掉
                                const result = output.substr(0, output.length - 1) + value;
                                console.log('+-符号=====================');
                                console.log(result);
                                console.log('+-符号=====================');
                                setOutput(result);
                                setOutputArr([outputArr[0], value]);
                                return;
                            }
                            // 不是加减号，则数字继续向后添加
                            const result = output + value
                            console.log('+-符号=====================');
                            console.log(result);
                            console.log('+-符号=====================');
                            setOutput(result);
                            setOutputArr([outputArr[0], outputArr[1] + value]);
                            setIsComputed(true);
                        }
                    } else {
                        // 处理左值小数点过长的问题
                        if ( outputArr[0].split('.')[1]?.length >= 2 ) {
                            // 解决左边输入小数超过2个精度的问题
                            // 是符号就在后面加上符号，不是符号则禁止输入
                            if ( value === '+' || value === '-' ) {
                                console.log('hehe');
                                setOutput(output + value);
                                // setOutputArr([output + value, '']);
                            } else {
                                return;
                            }
                        }
                        
                        // 处理左侧没有小数点时连续输入 0 的情况
                        if ( outputArr[0].length === 1 && outputArr[0][0] === '0' ) {
                            // 如果第一个数是0，进来了操作符，那么就追加数据，不替换，也不改变数组内数据
                            if(value === '+' || value === '-') {
                                const result = output + value;
                                setOutput(result)
                            }else {
                                // 第一个数是0，则替换掉
                                const result = output.substr(0, output.length - 1) + value;
                                console.log('no left===================');
                                console.log(result);
                                console.log('no left===================');
                                setOutput(result);
                                setOutputArr([result, '']);
                            }
                            return;
                        }
                        // 解决左值输入 0.00 时和其他其他判断逻辑发生冲突的问题
                        let result = output + value
                        console.log(result);
                        if(result === '0.00') {
                            result = '0'
                        }
                        setOutput(result);
                        setOutputArr([result, '']);
                    }
                } else if ( output.length >= 20 ) {
                    // 超长数不再继续允许继续输入
                    console.log('too long ');
                    return;
                }else if(value === '.') {
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
                            console.log('...=================');
                            setOutput(output + value);
                            console.log('...=================');
                            setOutputArr([outputArr[0], outputArr[1] + value]);
                        }
                    } else {
                        const result = output + value
                        // 如果有符号了，则只赋值右值
                        if(output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
                            if(outputArr[1].length < 1) {
                                return;
                            }else if(outputArr[1].indexOf('.') >= 0) {
                                return;
                            } else {
                                console.log('...=================');
                                console.log(result);
                                console.log('...=================');
                                setOutput(result);
                                setOutputArr([outputArr[0],outputArr[1]+value])
                            }
                        }else {
                            setOutput(result);
                            setOutputArr([outputArr[0] + value, '']);
                        }
                    }
                } else if( value === '+' || value === '-' ) {
                    // 必须在判断符号前执行这里的判断
                    calculate(value);
                } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
                    // 此处控制左值长度大于10时的右值输入
                    if ( outputArr[1].split('.')[1]?.length >= 2 ) {
                        // 阻止右侧小数精度超过小数点后2位
                        return;
                    } else {
                        // 阻止右值第一次输入0后还输入其他值，只允许输入小数
                        if ( outputArr[1].length >= 1 && value === '0' && outputArr[1].indexOf('.') === -1 ) {
                            return;
                        } else if ( outputArr[1].length === 1 && outputArr[1][0] === '0' ) {
                            // 第一个数是0，则替换掉
                            const result = output.substr(0, output.length - 1) + value;
                            console.log('+-符号=====================');
                            console.log(result);
                            console.log('+-符号=====================');
                            setOutput(result);
                            setOutputArr([outputArr[0], value]);
                            return;
                        }
                        // 不是加减号，则数字继续向后添加
                        const result = output + value
                        console.log('+-符号=====================');
                        console.log(result);
                        console.log('+-符号=====================');
                        setOutput(result);
                        setOutputArr([outputArr[0], outputArr[1] + value]);
                        setIsComputed(true);
                    }
                } else {
                }
                break;
            case '=':
                console.log('计算结果');
                break;
            case '':
                console.log('删除');
                break;
            case '今天':
                console.log('今天');
                break;
            case '完成':
                console.log('完成');
                break;
            
        }
    };
    return (
        <Wrapper className={ props.className }>
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
                <Button activeClassName="activeBtn" className="btn"
                        icon={ <Icon name='date' style={ {
                            width: '1.2em',
                            height: '1.2em',
                            marginRight: '4px'
                        } } /> }>
                    今天
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