import styled from "styled-components";
import React from "react";
import { useTags } from "hook/useTags";

const MyTagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background-color: #f60;
        color: #fff;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[],
  onChange: (tags: string[]) => void,
}

const TagsSection: React.FC<Props> = (props) => {
  // 标签数组
  const {tags, setTags} = useTags();
  // 勾选中的标签数组
  const selects = props.value;

  // 添加新的标签回调
  const onAddTag = () => {
    const newTag = window.prompt("请输入新的标签名:");
    if (newTag && newTag.trim()) {
      setTags([...tags, newTag]);
    }
  };

  // 标签的选择和取消
  const onToggleTag = (tag: string) => {
    const isSelect = selects.includes(tag);
    if (isSelect) {
      // 取消选择
      props.onChange([...selects.filter(t => t !== tag)]);
    } else {
      // 添加选中样式类名
      props.onChange([...selects, tag]);
    }
  };

  return (
    <MyTagsSection>
      <ol>
        {
          tags.map(item => <li
              key={ item }
              className={ selects.includes(item) ? "selected" : "" }
              onClick={ () => onToggleTag(item) }
            >{ item }</li>
          )
        }
      </ol>
      <button onClick={ onAddTag }>新增标签</button>
    </MyTagsSection>
  );
};

export { TagsSection };
