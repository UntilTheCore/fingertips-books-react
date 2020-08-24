import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div`
    font-size: 14px;
    background-color: #f2f2f4;
    animation: .5s linear .1s footerAnimation;

    @keyframes footerAnimation {
        0% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0%);
        }
    }
    > header {
        display: flex;
        border-bottom: .5px solid rgb(226,227,231);
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
                line-height: 24px;
                max-width: 100px;
                outline: none;
                font-size: inherit;
                background: inherit;
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
    
    > main {
        display: flex;
        flex-wrap: wrap;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            height: 55px;
            font-size: 16px;
            border-right: .5px solid rgb(226,227,231);
            border-bottom: .5px solid rgb(226,227,231);
        }
        div:nth-child(16) {
            background: rgba(5,200,245);
        }
        div:nth-child(4) {
            display: flex;
            align-items: center;
            svg {
                width: 1.2em;
                height: 1.2em;
                margin-right: 5px;
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
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>
                    <Icon name="date" />
                    今天
                </div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>-</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>+</div>
                <div>.</div>
                <div>0</div>
                <div>
                    <Icon name="delete" />
                </div>
                <div>完成</div>
            </main>
        </Wrapper>
    );
};

export default NumberPad;