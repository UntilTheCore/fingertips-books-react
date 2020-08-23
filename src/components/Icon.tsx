import React from 'react';
import styled from 'styled-components';

// 防止被tree shaking，使用require引入svg
require('icon/bill.svg');
require('icon/label.svg');
require('icon/me.svg');
require('icon/statistics.svg');

type Props = {
    name: string,
}

const Svg = styled.svg`
    width: 1.6em; height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
`;

const Icon = (props: Props) => {
    return (
        <Svg aria-hidden={ true }>
            <use xlinkHref={ '#' + props.name } />
        </Svg>
    );
};

export default Icon;
