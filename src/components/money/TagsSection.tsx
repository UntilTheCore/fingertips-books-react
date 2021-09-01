import styled from "styled-components";
import React, { useState } from "react";

const MyTagsSection = styled.section`
  background      : #FFFFFF;
  padding         : 12px 16px;
  flex-grow       : 1;
  display         : flex;
  flex-direction  : column;
  justify-content : flex-end;
  align-items     : flex-start;

  > ol {
    margin : 0 -12px;

    > li {
      background    : #D9D9D9;
      border-radius : 18px;
      display       : inline-block;
      padding       : 3px 18px;
      font-size     : 14px;
      margin        : 8px 12px;
    }
  }

  > button {
    background    : none;
    border        : none;
    padding       : 2px 4px;
    border-bottom : 1px solid #333;
    color         : #666;
    margin-top    : 8px;
  }
`;

const TagsSection: React.FC = () => {

  const [ tags, setTags ] = useState<string[]>( [ "衣", "食", "住", "行" ] );

  // 添加新的标签回调
  const onAddTag = () => {
    const newTag = window.prompt( "请输入新的标签名:" );
    if ( newTag && newTag.trim() ) {
      setTags( [ ...tags, newTag ] );
    }
  };

  return (
    <MyTagsSection>
      <ol>
        {
          tags.map( item => <li key={ item }>{ item }</li> )
        }
      </ol>
      <button onClick={ onAddTag }>新增标签</button>
    </MyTagsSection>
  );
};

export { TagsSection };
