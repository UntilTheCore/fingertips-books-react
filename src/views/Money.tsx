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
  const [form, setForm] = useState({
    tags: [] as number[],
    note: "",
    category: "-" as "+" | "-",
    money: 0,
  });

  const onChange = (obj: Partial<typeof form>) => {
    setForm({
      ...form,
      ...obj
    });
  };

  return (
    <MyLayout>
      <TagsSection
        value={ form.tags }
        onChange={ tags => {
          onChange({tags});
        } }
      />
      <NotesSection
        value={ form.note }
        onChange={ note => {
          onChange({note});
        } }
      />
      <CategorySection
        value={ form.category }
        onChange={ category => {
          onChange({category});
        } }
      />
      <NumberPadSection
        onChange={ money => {
          onChange({money});
        } }
        onOk={ () => {
          console.log("ok");
        } }
      />
    </MyLayout>
  );
}

export default Money;
