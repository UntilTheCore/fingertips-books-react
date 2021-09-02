import React, { useState } from "react";
import { Wrapper } from "./NumberPadSection/Wrapper";
import { generatorOutput } from "./NumberPadSection/generatorOutput";

type Props = {
  onChange: (money: number) => void,
  onOk: () => void,
}

const NumberPadSection: React.FC<Props> = (props) => {

  const [outPut, setOutPut] = useState("0");

  const handleBtnWrapperClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === "") return;

    if (text === "ok") {
      // TODO
    }

    setOutPut(generatorOutput(text!, outPut));
    props.onChange(parseFloat(generatorOutput(text!, outPut)));

  };

  return (
    <Wrapper>
      <div className="output">
        { outPut }
      </div>
      <div className="pad clearfix" onClick={ handleBtnWrapperClick }>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
