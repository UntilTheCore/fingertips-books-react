import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
const Tags = () => {
    const iconHashTable = new Map([
        ['餐饮','dining'],
        ['购物','shopping'],
        ['交通','bus'],
        ['日常','commodity'],
        ['蔬菜','vegetables'],
        ['水果','fruits'],
        ['零食','snacks'],
        ['服饰','costume'],
        ['娱乐','amusement'],
        ['红包','redpacket'],
        ['通讯','communication'],
        ['社交','socialContact'],
        ['运动','sport'],
        ['美容','beauty'],
        ['旅游','travel'],
        ['礼物','gift'],
        ['住房','house'],
        ['汽车','car'],
        ['居家','living'],
        ['家电','homeAppliances'],
        ['水电','waterAndElectricity'],
        ['快递','expressage'],
        ['维修','repair'],
        ['长辈','eldership'],
        ['孩子','child'],
        ['烟酒','wine'],
        ['医疗','health'],
        ['宠物','pet'],
        ['学习','study'],
        ['书籍','book'],
        ['办公','office'],
        ['捐赠','donate'],
        ['彩票','lottery'],
        ['其他','other']
    ]);
    const liArray: any = [];
    iconHashTable.forEach((key, value) => {
        liArray.push(<Tag key={ key } iconName={ key } tagTitle={ value } />);
    });
    return (
        <TagsSection>
            { liArray }
        </TagsSection>
    );
};

export default Tags;