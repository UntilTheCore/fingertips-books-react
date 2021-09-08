import styled from "styled-components";
import React, { useState } from "react";

const MyCategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

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

type Props = {
  value: "+" | "-",
  onChange: (category: "+" | "-") => void,
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {"-": "支出", "+": "收入"};
  // 获取类型：以对象的键
  type categoryType = keyof typeof categoryMap
  const [categoryList] = useState<categoryType[]>(["-", "+"]);

  const handleClick = (c: categoryType) => {
    props.onChange(c);
  };

  return (
    <MyCategorySection>
      <ul>
        {
          categoryList.map(item =>
            <li
              key={ item }
              className={ props.value === item ? "selected" : "" }
              onClick={ () => handleClick(item) }
            >{ categoryMap[item] }</li>
          )
        }
      </ul>
    </MyCategorySection>
  );
};

export { CategorySection };
