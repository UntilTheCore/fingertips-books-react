import React, { SVGAttributes } from "react";
import cs from "classnames";
// 防止被tree shaking，使用require引入svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

importAll(require.context("icon", true, /\.svg$/));

type Props = {
  name: string,
} & SVGAttributes<SVGElement>;

const Icon = (props: Props) => {
  const { name, children, className, ...rest } = props;
  return (
    <svg className={cs("icon", className)} {...rest} >
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export default Icon;
