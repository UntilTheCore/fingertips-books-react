// 统计页面
import React from "react";
import Layout from "components/Layout";
import { useTags } from "hook/useTags";

const Labels = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout name="标签页面">
      <ul>
        {
          tags.map(item =>
            <li key={ item }>{ item }</li>
          )
        }
      </ul>
    </Layout>
  );
};

export default Labels;
