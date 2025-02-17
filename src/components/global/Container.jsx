import React from "react";
import cn from "../../utils/cn";

function Container({ outContainer = "", className = "", children }) {
  return (
    <section className={cn(outContainer)}>
      <div
        className={cn(
          "max-w-7xl mx-auto px-3 md:px-5 lg:px-5 2xl:px-0  py-8 md:py-12",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default Container;
