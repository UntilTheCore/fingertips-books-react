import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

type Props = {
   iconName: string,
   tagTitle: string,
}

const TagSection = styled.section`
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
`

const Tag = (props: Props) => {
    
    const onClickMe = () => {
        console.log('hi');
    }
    
    return (
        <div onClick={onClickMe}>
            <TagSection>
                <div className={props.isSelected ? 'selected' : ''}>
                    <Icon name={ props.iconName } style={{
                        width: '2em',
                        height: '2em'
                    }} />
                </div>
                <span>{ props.tagTitle }</span>
            </TagSection>
        </div>
    );
};

export default Tag;