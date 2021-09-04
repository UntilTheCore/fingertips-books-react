import Layout from "components/Layout";
import TopBar from "components/TopBar";
import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const EditLabel: React.FC = () => {
  return (
    <Layout>
      <TopBar title="编辑标签" />
      {/* {tag ? tagContent(tag) : <Center>tag 不存在</Center>} */}
    </Layout>
  );
};

export default EditLabel;
