import React from "react";

const sizes = {
  xl: "text-4xl font-bold",
  s: "text-lg font-semibold",
  md: "text-[22px] font-semibold leading-[134.17%]",
  xs: "text-[13px] font-semibold leading-[140.4%]",
  lg: "text-2xl font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-ibmplexsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
