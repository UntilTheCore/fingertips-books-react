import Button from "components/Button";
import Input from "components/Input";
import Layout from "components/Layout";
import Space from "components/Space";
import TopBar from "components/TopBar";
import { useTags } from "hook/useTags";
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
  const { findTag } = useTags();
  const [tagName,setTagName] = useState('');
  const tag = findTag(parseInt(id));

  if (tag) {
    return (
      <Layout>
        <TopBar title="编辑标签" />
        <InputWrapper>
          <Input title="标签名" placeholder="请输入新标签名" />
        </InputWrapper>
        <Space />
        <Space />
        <Space />
        <ButtonWrapper>
          <Button>删除标签</Button>
        </ButtonWrapper>
      </Layout>
    );
  } else {
    return (
      <div>未找到标签！</div>
    )
  }
};

export default EditLabel;
