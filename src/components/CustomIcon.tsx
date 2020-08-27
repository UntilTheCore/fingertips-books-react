import React from 'react';
type Props = {
    name: string,
    className?: string,
    size?: string,
}
const CustomIcon = ({ name, className = '', size = 'md', ...restProps }: Props) => {
    return (
        <svg className={ `am-icon am-icon-${ name.substr(1) } am-icon-${ size } ${ className }` } { ...restProps } >
            <use xlinkHref={ '#'+ name } />
        </svg>
    );
};

export default CustomIcon;