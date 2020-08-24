import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const TagsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25vw;
        height: 25vw;
        text-align: center;
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-color: #F5F5F5;
            &.selected {
                background-color: rgb(5,200,245);
            }
        }
        
        > span {
            margin-top: 8px;
            font-size: 14px;
        }
    }
`;
const Tags = () => {
    const iconHashTable = new Map([
        ['dining', '餐饮'],
        ['shopping', '购物'],
        ['bus', '交通'],
        ['commodity', '日常']]);
    const liArray: any = [];
    iconHashTable.forEach((value, key) => {
        liArray.push(
            <div key={ key }>
                <Icon name={ key } />
                <span>{ value }</span>
            </div>
        );
    });
    return (
        <TagsSection>
            { liArray }
            <div>
                <div className={ 'selected' }>
                    <Icon name="dining" />
                </div>
                <span>餐饮</span>
            </div>
        </TagsSection>
    );
};

export default Tags;