import React, { useState } from 'react';
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
        ['vegetables', '蔬菜'],
        ['fruits', '水果'],
        ['snacks', '零食'],
        ['costume', '服饰'],
        ['amusement', '娱乐'],
        ['redpacket', '红包'],
        ['communication', '通讯'],
        ['socialContact', '社交'],
        ['sport', '运动'],
        ['beauty', '美容'],
        ['travel', '旅游'],
        ['gift', '礼物'],
        ['house', '住房'],
        ['car', '汽车'],
        ['living', '居家'],
        ['homeAppliances', '家电'],
        ['waterAndElectricity', '水电'],
        ['expressage', '快递'],
        ['repair', '维修'],
        ['eldership', '长辈'],
        ['child', '孩子'],
        ['wine', '烟酒'],
        ['health', '医疗'],
        ['pet', '宠物'],
        ['study', '学习'],
        ['book', '书籍'],
        ['office', '办公'],
        ['donate', '捐赠'],
        ['lottery', '彩票'],
        ['other', '其他支出']
    ]);
    // TODO setTags 用来后期新增标签用,现在只用预设标签
    const [tags, setTags] = useState(iconHashTable);
    const [selectedTag, setSelectedTag] = useState<string>();
    const liArray: any = [];
    const onToggleTag = (tagName: string) => {
        if(selectedTag === tagName) {
           setSelectedTag('')
        }else{
            setSelectedTag(tagName);
        }
    };
    tags.forEach((value, key) => {
        liArray.push(<Tag isSelected={ selectedTag === key } onClick={ () => onToggleTag(key) } key={ key }
                          iconName={ key } tagTitle={ value } />);
    });
    return (
        <TagsSection>
            { liArray }
        </TagsSection>
    );
};

export default Tags;