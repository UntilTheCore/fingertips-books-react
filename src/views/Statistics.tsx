// 统计页面
import React, { useState } from "react";
import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { CategorySection } from "components/money/CategorySection";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

const CategorySectionWrapper = styled.section`
  background-color : #f5f5f5;
`;

const StatisticsListWrapper = styled.section`
  ul {
    
    li {
      padding: 6px 12px;
    }
    
    > li:first-child {
      display: flex;
      justify-content : space-between;
    }
    
    > li:not(:first-child) {
      display: flex;
      justify-content : space-between;
      border-bottom: 1px solid #cecece;
      background-color: #fff;
      
      span {
        width: 50px;
      }
      
      span:nth-child(2) {
        flex: 2;
        color: #999;
      }
      
      span:nth-child(3) {
        text-align: right;
      }
    }
  }
`;

const Statistics = () => {
  const { getRecordsByDate } = useRecords();
  const [ category, setCategory ] = useState<"+" | "-">( "-" );
  const { findTagName } = useTags();

  const records = getRecordsByDate(category);

  return (
    <Layout name="统计页面">
      <CategorySectionWrapper>
        <CategorySection value={ category } onChange={ (v) => setCategory( v ) }/>
      </CategorySectionWrapper>
      <StatisticsListWrapper>
        {
          records.map( r => (
            <ul key={r.date}>
              <li>
                <span>{ r.date }</span>
                <span>{ r.list.reduce( (max, item) => {
                  return max + item.money;
                }, 0 ) }</span>
              </li>
              { r.list.map( (l,i) => (
                <li key={i}>
                  <span>{ findTagName( l.tags[0] ) }</span>
                  <span>{ l.note }</span>
                  <span>{ l.money }</span>
                </li>
              ) ) }
            </ul>
          ) )
        }
      </StatisticsListWrapper>
    </Layout>
  );
};

export default Statistics;
