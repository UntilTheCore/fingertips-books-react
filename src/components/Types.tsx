import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
    defaultType: '-'|'+'
}

const TypesSection: React.FC = styled.section`
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
    const categoryMap = { '-': '支出', '+': '收入' };
    type categoryType = keyof typeof categoryMap
    const [categoryList] = useState<categoryType[]>(['-', '+']);
    const [category,setCategory] = useState(props.defaultType)
    const getType = (type: categoryType) => {
        setCategory(type)
    }
    return (
        <TypesSection>
            { categoryList.map(c => {
                return <div key={c} onClick={() => getType(c)} className={ category === c ? 'selected' : '' }>{categoryMap[c]}</div>;
            }) }
        </TypesSection>
    );
};

export default Types;