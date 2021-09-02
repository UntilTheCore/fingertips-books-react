import Layout from "../components/Layout";
import React, { useState } from "react";
import { TagsSection } from "components/money/TagsSection";
import { CategorySection } from "components/money/CategorySection";
import { NotesSection } from "components/money/NotesSection";
import { NumberPadSection } from "components/money/NumberPadSection";
import styled from "styled-components";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [obj, setObj] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as "+" | "-",
    money: 0,
  });

  return (
    <MyLayout>
      <TagsSection
        value={ obj.tags }
        onChange={ (tags) => {
          setObj({
            ...obj,
            tags
          });
        } }
      />
      <NotesSection
        value={ obj.note }
        onChange={ (note) => {
          setObj({
            ...obj,
            note
          });
        } }
      />
      <CategorySection
        value={ obj.category }
        onChange={ (category) => {
          setObj({
            ...obj,
            category
          });
        } }
      />
      <NumberPadSection
        onChange={ (money) => {
          setObj({
            ...obj,
            money
          });
        } }
        onOk={ () => {
          console.log("ok");
        } }
      />
    </MyLayout>
  );
}

export default Money;
