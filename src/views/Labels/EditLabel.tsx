import Button from "components/Button";
import Input from "components/Input";
import Layout from "components/Layout";
import Space from "components/Space";
import TopBar from "components/TopBar";
import { useTags } from "hooks/useTags";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const InputWrapper = styled.section`
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  margin-top: 8px;
`

type Params = {
  id: string,
}

const EditLabel: React.FC = () => {
  const { id } = useParams<Params>();
  const { findTag, updateTags, deleteTag } = useTags();
  const tag = findTag(parseInt(id));

  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input
          title="标签名"
          value={tag.name}
          placeholder="请输入新标签名"
          onChange={(e) => {
            updateTags(tag.id, { name: e.target.value })
          }}
        />
      </InputWrapper>
      <Space />
      <Space />
      <Space />
      <ButtonWrapper>
        <Button onClick={() => deleteTag(tag.id)} >删除标签</Button>
      </ButtonWrapper>
    </div>
  )

  return (
    <Layout>
      <TopBar title="编辑标签" />
      {tag ? tagContent(tag) : <div>tag已删除或不存在</div>}
    </Layout>
  );
};

export default EditLabel;
