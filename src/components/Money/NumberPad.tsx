import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { Button } from 'antd-mobile';

const Wrapper = styled.div`
    font-size: 14px;
    background-color: #f2f3f5;
    animation: .35s linear footerAnimation;

    @keyframes footerAnimation {
        0% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0%);
        }
    }
   
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
const NumberPad = () => {
    return (
        <Wrapper>
            <header>
                <label>
                    <Icon name="notes" />
                    <span>备注：</span>
                    <input type="text" placeholder="点击写备注..." />
                </label>
                <div>3456789.12+3456789.12</div>
            </header>
            <main>
                <Button activeClassName="activeBtn" className="btn">7</Button>
                <Button activeClassName="activeBtn" className="btn">8</Button>
                <Button activeClassName="activeBtn" className="btn">9</Button>
                <Button activeClassName="activeBtn" className="btn"
                        icon={ <Icon name='date' style={ {
                            width: '1.2em',
                            height: '1.2em',
                            'margin-right': '4px'
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
                <Button activeClassName="activeBtn" className="btn">完成</Button>
            </main>
        </Wrapper>
    );
};

export default NumberPad;