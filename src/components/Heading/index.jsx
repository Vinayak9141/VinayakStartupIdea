import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-sm font-semibold",
};

const Heading = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Componente = as || "h6";

  return (
    <Componente
      className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Componente>
  );
};

export { Heading };
