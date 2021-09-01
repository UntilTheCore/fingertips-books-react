import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

type Props = {
  name: string,
  children?: any,
}

const Layout = (props: Props) => {

  return (
    <LayoutWrapper>
      <h2>{ props.name }</h2>
      <main>
        { props.children }
      </main>
      <Nav />
    </LayoutWrapper>
  );
};

export default Layout;
