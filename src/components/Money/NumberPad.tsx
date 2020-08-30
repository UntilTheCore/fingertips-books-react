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
const NumberPad = (props: any) => {
    const [note, setNote] = useState('');
    const refInput = useRef<HTMLInputElement>(null);
    const getInputValue = () => {
        console.log(refInput?.current?.value);
    };
    
    const [isComputed, setIsComputed] = useState(false);
    const [output, setOutput] = useState('0.00');
    const [outputArr, setOutputArr] = useState(['', '']);
    const X = (data: string) => {
        // 停止加入左边，开始加入右边
        // 点击加号后将+字符串放入 output，
        if ( output.indexOf('+') >= 0 ) {
            if ( data === '+' ) {
                // 已有一个 + 号存在，判断 + 号后面是否有数字，有则计算之前的并在最后面加上 + 号
                if ( outputArr[1].length >= 1 ) {
                    // 执行计算
                    const result = parseFloat(outputArr[0]) + parseFloat(outputArr[1]);
                    setOutputArr([`${ result }`, '']);
                    setOutput(`${ result.toFixed(2) }+`);
                }
            } else if ( data === '-' ) {
                // 执行加号替换
                // 判断 outputArr的是否有长度，有则计算，并在计算好的值后面增加 - 号,否则替换
                if ( outputArr[1].length >= 1 ) {
                    const result = parseFloat(outputArr[0]) + parseFloat(outputArr[1]);
                    setOutputArr([`${ result }`, '']);
                    setOutput(`${ result.toFixed(2) }-`);
                } else {
                    const temp = output.substr(0, output.length - 1) + data;
                    setOutput(temp);
                }
            }
        } else if ( output.indexOf('-') >= 0 ) {
            if ( data === '-' ) {
                if ( outputArr[1].length >= 1 ) {
                    // 执行计算
                    const result = parseFloat(outputArr[0]) - parseFloat(outputArr[1]);
                    setOutputArr([`${ result }`, '']);
                    setOutput(`${ result.toFixed(2) }-`);
                }
            } else if ( data === '+' ) {
                // 执行加号替换
                // 判断 outputArr的是否有长度，有则计算，并在计算好的值后面增加 - 号,否则替换
                if ( outputArr[1].length >= 1 ) {
                    const result = parseFloat(outputArr[0]) - parseFloat(outputArr[1]);
                    setOutputArr([`${ result }`, '']);
                    setOutput(`${ result.toFixed(2) }+`);
                } else {
                    const temp = output.substr(0, output.length - 1) + data;
                    setOutput(temp);
                }
            }
            
        } else {
            // 没有增加过符号
            setOutput(output + data);
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
                        setOutput(value);
                    } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
                        if ( value === '+' || value === '-'  ) {
                            X(value);
                        } else {
                            setOutput(output + value);
                            setOutputArr([outputArr[0], outputArr[1] + value]);
                            setIsComputed(true);
                        }
                    } else {
                        setOutput(output + value);
                        setOutputArr([output + value, '']);
                    }
                } else if ( value === '+' || value === '-' ) {
                    X(value);
                } else if ( output.length >= 21 ) {
                    return;
                } else if ( output.indexOf('+') >= 0 || output.indexOf('-') >= 0 ) {
                    setOutput(output + value);
                    setOutputArr([outputArr[0], outputArr[1] + value]);
                    setIsComputed(true);
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