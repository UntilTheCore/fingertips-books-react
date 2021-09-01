import React from "react";
// 防止被tree shaking，使用require引入svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

importAll(require.context("icon", true, /\.svg$/));

const Icon = (props: { name: string }) => {
  return (
    <svg className={ "icon" } aria-hidden={ true }>
      <use xlinkHref={ "#" + props.name } />
    </svg>
  );
};

export default Icon;
