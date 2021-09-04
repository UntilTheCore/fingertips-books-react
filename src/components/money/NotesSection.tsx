import Input from "components/Input";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const MyNotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

const InputWrapper = styled.section`
  padding: 12px 0;
`

type Props = {
  value: string,
  onChange: (note: string) => void,
}

const NotesSection: React.FC<Props> = (props) => {
  const [note, setNote] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <MyNotesSection>
      <InputWrapper>
        <Input title="备注" value={note} placeholder="请填写备注" onChange={onChange} />
      </InputWrapper>
    </MyNotesSection>
  );
};

export { NotesSection };
