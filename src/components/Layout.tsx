import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(var(--vh, 1vh));
      > main {
          overflow: auto;
      }
`;

const Layout = (props: any) => {
    console.dir(props.children);
    return (
        <Wrapper>
            <header>{ props.children[0] }</header>
            <main> { props.children[1] } </main>
            <footer><Nav /></footer>
        </Wrapper>
    );
};

export default Layout;