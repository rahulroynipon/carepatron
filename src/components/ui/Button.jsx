import React from "react";
import cn from "../../utils/cn";

function Button({
  children,
  className = "",
  variant = "primary",
  onClick = null,
}) {
  const theme = {
    primary: "bg-primary hover:bg-indigo-900 text-white",
    outline:
      "bg-white border border-gray-700 text-gray-800 hover:bg-primary/20 ",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer font-medium py-2 px-6 rounded-full text-sm transition-colors duration-300",
        theme[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
