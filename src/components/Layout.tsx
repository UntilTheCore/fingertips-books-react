import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  
  main {
    flex-grow: 1;
    overflow: auto;
  }
`;

const Layout = (props: any) => {

  return (
    <LayoutWrapper>
      <main className={props.className}>
        {props.children}
      </main>
      <Nav />
    </LayoutWrapper>
  );
};

export default Layout;
