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

const CategorySectionWrapper = styled.section`
  background-color: #c4c4c4;
`;

type formType = {
  tags: number[],
  note: string,
  category: "+" | "-",
  money: number,
}

const defaultForm: formType = {
  tags: [],
  note: "",
  category: "-",
  money: 0,
};

function Money() {
  const [form, setForm] = useState<formType>(defaultForm);
  const {addRecord} = useRecords();

  const onChange = (obj: Partial<typeof form>) => {
    setForm({
      ...form,
      ...obj
    });
  };

  const onAddRecord = () => {
    addRecord(form) && alert("记录已保存");
    setForm(defaultForm);
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
      <CategorySectionWrapper>
        <CategorySection
          value={ form.category }
          onChange={ category => {
            onChange({category});
          } }
        />
      </CategorySectionWrapper>
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
