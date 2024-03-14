import clsx from "clsx";
import React from "react";

interface IContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx("mx-auto w-full max-w-[1280px]", className)}>
      {children}
    </div>
  );
};

export default Container;
