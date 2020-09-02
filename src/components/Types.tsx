import React, { useState } from 'react';
import styled from 'styled-components';


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

const categoryMap = { '-': '支出', '+': '收入' };
type categoryType = keyof typeof categoryMap
type Props = {
    defaultType: categoryType,
    onChange: (value: categoryType) => void,
}
const Types: React.FC<Props> = (props) => {
    const [categoryList] = useState<categoryType[]>(['-', '+']);
    const category = props.defaultType;
    const getType = (type: categoryType) => {
        props.onChange(type)
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