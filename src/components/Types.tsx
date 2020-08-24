import React from 'react';
import styled from 'styled-components';

type Props = {
    type: string
}

const TypesSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(5,200,245);
    font-size: 18px;
    font-weight: bold;
    color: inherit;
    div {
        position: relative;
        padding: 12px 16px;
        &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border: 1px solid;
        }
    }
`;

const Types = (props: Props) => {
    return (
        <TypesSection>
            <div className={props.type === '-' ? 'selected' : ''}>支出</div>
            <div className={props.type === '+' ? 'selected' : ''}>收入</div>
        </TypesSection>
    );
};

export default Types;