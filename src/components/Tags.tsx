import React, { useState } from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

type Props = {
    tags: { [key: string]: string } | undefined,
    onChange: (tagId: string) => void,
}

const Tags: React.FC<Props> = (props) => {
    const [selectedTag, setSelectedTag] = useState<string>();
    const liArray: any = [];
    const onToggleTag = (tagId: string) => {
        if(selectedTag === tagId) {
            // 自己被再次点击，则取消选中状态
           setSelectedTag('')
            props.onChange('')
        }else{
            // 标签被选中了
            setSelectedTag(tagId);
            props.onChange(tagId)
        }
    };
    for (let key in props.tags) {
        liArray.push(<Tag isSelected={ selectedTag === key } onClick={ () => onToggleTag(key) } key={ key }
                          iconName={ key } tagTitle={ props.tags[key] } />);
    }
    return (
        <TagsSection>
            { liArray }
        </TagsSection>
    );
};

export default Tags;