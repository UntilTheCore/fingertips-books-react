// 统计页面
import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import { useTags } from "hook/useTags";
import { Link } from "react-router-dom";
import Icon from "components/Icon";
import Space from "components/Space";
import Button from "components/Button";

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Labels = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout name="标签页面">
      <TagList>
        { tags.map(tag =>
          <li key={ tag.id }>
            <Link to={ "/labels/" + tag.id }>
              <span className="oneLine">{ tag.name }</span>
              <Icon name="right" />
            </Link>
          </li>
        ) }
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Labels;
