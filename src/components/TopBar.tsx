import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { useHistory } from "react-router-dom";

const TopBarWrapper = styled.header`
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

  const history = useHistory();
  const back = () => {
    history.length > 2 ? history.goBack() : history.push('/');
  }

  return (
    <TopBarWrapper>
      {
        props.enableBack && <Icon name="left" onClick={back} />
      }
      <span>{props.title}</span>
      <Icon name="" />
    </TopBarWrapper>
  );
}

TopBar.defaultProps = {
  enableBack: true,
}

export default TopBar;