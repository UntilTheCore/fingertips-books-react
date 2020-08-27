import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(var(--vh, 1vh));
    > main {
        flex-grow: 1;
        overflow: auto;
        // 使 iOS 端滑动顺畅
        -webkit-overflow-scrolling: touch;
        // 隐藏滚动条
        &::-webkit-scrollbar {
            height: 0 !important;
            width: 0 !important;
        }
    }
`;

type Props = {
    headerSlot?: React.FC | Element | JSX.Element,
    footerSlot?: React.FC | Element | JSX.Element,
    children?: React.FC | Element | JSX.Element | React.FC[] | Element[] | JSX.Element[]
}

const Layout = (props: Props) => {
    return (
        <Wrapper>
            <header>{ props.headerSlot }</header>
            <main> { props.children } </main>
            <footer>{ props.footerSlot}</footer>
        </Wrapper>
    );
};

export default Layout;