import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25vw;
        height: 25vw;
        text-align: center;
        outline: 1px solid red;
        > div {
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-color: #F5F5F5;
            &.selected {
                background-color: rgb(5,200,245);
            }
        }
    }
`
const Tags = () => {
    return (
        <Ul>
            <li>
                <div className={"selected"}>
                    123
                </div>
               <span>餐饮</span>
            </li>
            <li>
                <div>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
            <li>
                <div className={"selected"}>
                    123
                </div>
                <span>餐饮</span>
            </li>
        </Ul>
    )
}

export default Tags;