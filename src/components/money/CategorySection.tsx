import styled from "styled-components";
import React, { useState } from "react";

const MyCategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection = () => {
  const categoryMap = {"-": "支出", "+": "收入"};
  // 获取类型：以对象的键
  type categoryType = keyof typeof categoryMap
  const [categoryList] = useState<categoryType[]>(["-", "+"]);
  const [category, setCategory] = useState("-");

  const handleClick = (c: categoryType) => {
    setCategory(c);
  };

  return (
    <MyCategorySection>
      <ul>
        {
          categoryList.map(item =>
            <li
              key={ item }
              className={ category === item ? "selected" : "" }
              onClick={ () => handleClick(item) }
            >{ categoryMap[item] }</li>
          )
        }
      </ul>
    </MyCategorySection>
  );
};

export { CategorySection };
