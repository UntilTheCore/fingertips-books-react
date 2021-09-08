import Layout from "../components/Layout";
import React, { useState } from "react";
import { TagsSection } from "components/money/TagsSection";
import { CategorySection } from "components/money/CategorySection";
import { NotesSection } from "components/money/NotesSection";
import { NumberPadSection } from "components/money/NumberPadSection";
import styled from "styled-components";
import { useRecords } from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type formType = {
  tags: number[],
  note: string,
  category: "+" | "-",
  money: number,
}

function Money() {
  const [form, setForm] = useState<formType>({
    tags: [],
    note: "",
    category: "-",
    money: 0,
  });

  const {addRecord} = useRecords();

  const onChange = (obj: Partial<typeof form>) => {
    setForm({
      ...form,
      ...obj
    });
  };

  const onAddRecord = () => {
    addRecord(form) && alert("记录已保存");
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
        value={ form.money }
        onChange={ money => {
          onChange({money});
        } }
        onOk={ onAddRecord }
      />
    </MyLayout>
  );
}

export default Money;
