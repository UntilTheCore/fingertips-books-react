import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  label {
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
`

type Props = {
  title: string,
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const { title, ...attr } = props;
  return (
    <InputWrapper>
      <label>
        <span>{props.title}</span>
        <input type="text" {...attr} />
      </label>
    </InputWrapper>
  );
};

export default Input;