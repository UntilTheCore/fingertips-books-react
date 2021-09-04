import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const _Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 19px;
  padding: 13px;
  background:white;
`;

type Props = {
  /** topbar的名称 */
  title: string,
  /** 是否启用返回按钮 */
  enableBack?: boolean,
}

const TopBar: React.FC<Props> = (props) => {
  return (
    <_Topbar>
      {
        props.enableBack && <Icon name="left" />
      }
      <span>{props.title}</span>
      <Icon name="" />
    </_Topbar>
  );
}

TopBar.defaultProps = {
  enableBack: true,
}

export default TopBar;