import React, { useRef, useState } from "react";
import styled from "styled-components";

const MyNotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection: React.FC = () => {

  const refInput = useRef<HTMLInputElement>(null);
  const [note, setNote] = useState<string>("");

  const handleBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };

  return (
    <MyNotesSection>
      <label>
        <span>备注</span>
        <input type="text" defaultValue={ note } placeholder="在这里添加备注" ref={ refInput } onBlur={ handleBlur } />
      </label>
    </MyNotesSection>
  );
};

export { NotesSection };
