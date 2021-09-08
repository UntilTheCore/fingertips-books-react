import Input from "components/Input";
import React from "react";
import styled from "styled-components";

const MyNotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

const InputWrapper = styled.section`
  padding: 12px 0;
`;

type Props = {
  value: string,
  onChange: (note: string) => void,
}

const NotesSection: React.FC<Props> = (props) => {
  // 这里onChange的类型应使用 React.ChangeEventHandler<HTMLInputElement> 来为其设置类型，但可以不设置在函数而设置到参数的类型上，两种方式都能正确获取value，但最好还是给函数设置类型而不是在参数上。
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <MyNotesSection>
      <InputWrapper>
        <Input title="备注" value={ props.value } placeholder="请填写备注" onChange={ onChange } />
      </InputWrapper>
    </MyNotesSection>
  );
};

export { NotesSection };
