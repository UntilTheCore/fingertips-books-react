import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
`;

const Layout = (props: any) => {
   return (
       <Wrapper>
          <main>
              {props.children}
          </main>
           <Nav />
       </Wrapper>
   )
}

export default Layout;