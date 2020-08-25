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
        ['commodity', '日常'],
        ['a','a'],
        ['b','a'],
        ['d','a'],
        ['e','a'],
        ['c','a'],
        ['f','a'],
        ['g','a'],
        ['h','a'],
        ['h','a'],
        ['j','a'],
        ['k','a'],
        ['l','a'],
        ['o','a'],
        ['i','a'],
        ['u','a'],
        ['y','a'],
        ['t','a'],
        ['m','a'],
        ['n','a'],
        ['v','a'],
    ]);
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