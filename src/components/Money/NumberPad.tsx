import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { Button, DatePicker } from 'antd-mobile';

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
        }
        
        .btn {
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
        
        /* 由于antd的DatePicker会在按钮外部多增加一个div，所以这里需要额外的样式设置
          并清除一些antD带来的样式
        */
        > div {
            width: 25%;
            > .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: normal;
                font-size: 16px;
                > div {
                    margin-right: 4px;
                }
                > span {
                    line-height: 0;
                }
            }
        }
    }
    
`;

type symbolTypes = '+' | '-';
type outputArrType = {
    left: string,
    right?: string,
}

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
    const [time,setTime] = useState<string>('')
    // 通过符号设置数据
    const setDataBySym = (data: symbolTypes, value: number) => {
        // 已有一个 + 号存在，判断 + 号后面是否有数字，有则计算之前的并在最后面加上 + 号
        setValue(`${ value.toFixed(2) }${ data }`,{left:`${ value.toFixed(2) }`})
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
            setValue(output.substr(0, output.length - 1) + data,{left:''})
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
                setValue(output+value,{left:outputArr[0],right:outputArr[1]+value},true)
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
                    setValue(result,{left:outputArr[0],right:outputArr[1]+value},true)
                }
            } else {
                setValue(result,{left:outputArr[0]+value})
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
            setValue(result,{left:outputArr[0],right:value},true)
            return;
        }
        // 不是加减号，则数字继续向后添加
        const result = output + value;
        setValue(result,{left:outputArr[0],right:outputArr[1] + value},true)
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
    function setValue(outputValue: string,outputArrValue:outputArrType,isComputed?:boolean) {
        const {left,right=''} = outputArrValue
        setOutput(outputValue);
        left && setOutputArr([left, right]);
        isComputed ? setIsComputed(true) : setIsComputed(false)
    }
    
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
                        if ( value === '.' || value === '+' || value === '-' ) {
                            return;
                        }
                        setValue(value,{left:value})
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
                                setValue(output+value,{left:''})
                            } else {
                                return;
                            }
                        }
                        
                        // 处理左侧没有小数点时连续输入 0 的情况
                        if ( outputArr[0].length === 1 && outputArr[0][0] === '0' ) {
                            // 如果第一个数是0，进来了操作符，那么就追加数据，不替换，也不改变数组内数据
                            if ( value === '+' || value === '-' ) {
                                const result = output + value;
                                setValue(result,{left:''})
                            } else {
                                // 第一个数是0，则替换掉
                                const result = output.substr(0, output.length - 1) + value;
                                setValue(result,{left:result})
                            }
                            return;
                        }
                        // 解决左值输入 0.00 时和其他其他判断逻辑发生冲突的问题
                        let result = output + value;
                        if ( result === '0.00' ) {
                            result = '0';
                        }
                        setValue(result,{ left:result })
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
                break;
            case '=':
                if(output.indexOf('+') >= 0) {
                    // 执行加法
                    const result = (parseFloat(outputArr[0]) + parseFloat(outputArr[1])).toFixed(2);
                    setValue(result,{left:result})
                }else if(output.indexOf('-') >= 0) {
                    // 执行减法
                    const result = (parseFloat(outputArr[0]) - parseFloat(outputArr[1])).toFixed(2)
                    setValue(result,{left:result})
                }
                break;
            case '':
                // 操作 output ，有运算符，则以运算符拆分后分别将内容防止 outputArr 内
                const result = output.substr(0,output.length-1)
                if(result.indexOf('+') >= 0) {
                    const outputArrResult: string[] = result.split('+')
                    setValue(result,{left:outputArrResult[0],right:outputArrResult[1]},true)
                }else if(result.indexOf('-') >= 0) {
                    const outputArrResult: string[] = result.split('-')
                    setValue(result,{left:outputArrResult[0],right:outputArrResult[1]},true)
                } else if(result.length < 1){
                    setValue('0.00',{left:'0'})
                }else {
                    setValue(result,{left:result})
                }
                break;
            case '今天':
                console.log('今天');
                break;
            case '完成':
                // 这个逻辑表示用户输入的数据都已完成，可以记录这一笔数据到数据库中
                // 去 outputArr[0]中的数据来保存，为了防止意外，判断判断是否含有运算符，有则删除
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
                <DatePicker
                    mode="datetime"
                    value={new Date()}
                    title='选择日期'
                    onOk={val => setTime(val.toISOString().split('T')[0])}
                >
                    <Button activeClassName="activeBtn" className='btn'>
                        {time === '' ? <Icon name='date' style={{width:'1.4em',height:'1.4em'}}/> : time}
                        {time === '' ? '今天' : ''}
                    </Button>
                </DatePicker>
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