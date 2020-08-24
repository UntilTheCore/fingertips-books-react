import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
const Tags = () => {
    const iconHashTable = new Map([
        ['dining', '餐饮'],
        ['shopping', '购物'],
        ['bus', '交通'],
        ['commodity', '日常']]);
    const liArray: any = [];
    iconHashTable.forEach((value, key) => {
        liArray.push(<Tag key={ key } iconName={ key } tagTitle={ value } />);
    });
    return (
        <TagsSection>
            { liArray }
        </TagsSection>
    );
};

export default Tags;