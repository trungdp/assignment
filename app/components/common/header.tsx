import clsx from "clsx";
import React, { useMemo } from "react";

interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Header: React.FC<IHeaderProps> = ({
  className,
  children,
  type = "h2",
}) => {
  const headerClass = useMemo(() => {
    switch (type) {
      case "h1":
        return "text-4xl font-bold";
      case "h2":
        return "text-2xl font-bold";
      case "h3":
        return "text-xl font-bold";
      case "h4":
        return "text-xl font-semibold";
      case "h5":
        return "text-lg font-semibold";
      default:
        return "text-base font-semibold";
    }
  }, [type]);

  const DynamicHeader = () =>
    React.createElement(
      type,
      { className: clsx(headerClass, className) },
      children
    );

  return <DynamicHeader />;
};

export default Header;
