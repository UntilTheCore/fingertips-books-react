import Layout from "../components/Layout";
import React from "react";
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
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection>

      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
