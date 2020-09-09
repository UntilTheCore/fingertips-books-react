import React, { useState } from 'react';
import styled from 'styled-components';

const TypesSection: React.FC = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(5,200,245);
    font-size: 18px;
    font-weight: bold;
    color: inherit;
    section {
        display: flex;
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
    }
`;

const categoryMap = { '-': '支出', '+': '收入' };
type categoryType = keyof typeof categoryMap
type Props = {
    defaultType: categoryType,
    onChange: (value: categoryType) => void,
    // 返回按钮
    BackButton?: React.FC | Element | JSX.Element,
}
const Types: React.FC<Props> = (props) => {
    const [categoryList] = useState<categoryType[]>(['-', '+']);
    const category = props.defaultType;
    const getType = (type: categoryType) => {
        props.onChange(type)
    }
    return (
        <TypesSection>
            { props.BackButton }
            <section>
                { categoryList.map(c => {
                    return <div key={ c } onClick={ () => getType(c) }
                                className={ category === c ? 'selected' : '' }>{ categoryMap[c] }</div>;
                }) }
            </section>
            <div />
        </TypesSection>
    );
};

export default Types;