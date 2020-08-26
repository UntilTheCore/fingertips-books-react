import React from 'react';
import styled from 'styled-components';

// 防止被tree shaking，使用require引入svg
// 引入整个存svg的目录
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
    console.log('import all svg error!',error);
}

type Props = {
    name: string,
    style?: object,
}

const Wrapper: React.FC = styled.div`
    > svg {
        width: 1.6em; height: 1.6em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
`;

const Icon = (props: Props) => {
    return (
        <Wrapper>
            <svg aria-hidden={ true } style={props.style}>
                <use xlinkHref={ '#' + props.name }/>
            </svg>
        </Wrapper>
    );
};

export default Icon;
