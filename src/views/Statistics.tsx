// 统计页面
import React, { useState } from "react";
import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { CategorySection } from "components/money/CategorySection";
import styled from "styled-components";
import { useTags } from "hooks/useTags";
import dayjs from "dayjs";


const CategorySectionWrapper = styled.section`
  background-color: #f5f5f5;
`;

type recordType = {
  tags: number[],
  note: string,
  category: "+" | "-",
  money: number,
  createAt: string, // 创建记录的日期
}

const Statistics = () => {
  const {records} = useRecords();
  const [category, setCategory] = useState<"+" | "-">("-");
  const {tags} = useTags();

  const categoryList: { name: string, list: recordType[] }[] = tags.map(t => {
    return {
      name: t.name,
      list: records.filter(r => r.tags[0] === t.id)
    };
  }).filter(c => c.list.length > 0);

  console.log(categoryList);

  return (
    <Layout name="统计页面">
      <CategorySectionWrapper>
        <CategorySection value={ category } onChange={ (v) => setCategory(v) } />
      </CategorySectionWrapper>
      {
        categoryList.map(c => {
          return (
            <dl key={ c.name }>
              <dt>{ c.name }</dt>
              {
                c.list.map((r, i) =>
                  <dd key={ i }>
                    <span>{ r.money }</span>
                    &nbsp;&nbsp;
                    <span>{ dayjs(r.createAt).format("YYYY.MM.DD") }</span>
                  </dd>
                )
              }
            </dl>
          );
        })
      }
    </Layout>
  );
};

export default Statistics;
