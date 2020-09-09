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
    onClick?: () => void,
}

const Wrapper: React.FC = styled.div`
    > svg {
        width: 1.6em; height: 1.6em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
`;

const Icon: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <svg onClick={ props.onClick } aria-hidden={ true } style={ props.style }>
                <use xlinkHref={ '#' + props.name }>{ props.name }</use>
            </svg>
        </Wrapper>
    );
};

export default Icon;
