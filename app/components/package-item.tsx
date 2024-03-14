"use client";

import clsx from "clsx";
import React from "react";
import Header from "./common/header";
import { Package } from "@/types";

type IPackageItemProps = Package & {
  className?: string;
  onClick?: (id: number | string) => void;
};

const PackageItem: React.FC<IPackageItemProps> = ({
  className,
  name,
  highlight,
  description,
  id,
  onClick = () => {},
}) => {
  return (
    <div
      className={clsx(
        "text-center p-4 min-h-[200px] shadow-md rounded-2xl border-2 border-slate-200 bg-white",
        "cursor-pointer transition-transform transform hover:scale-105",
        highlight && "border-slate-500 text-slate-100 !bg-slate-800",
        className
      )}
      onClick={() => onClick(id)}
    >
      <Header>{name}</Header>
      <div className="mt-4">
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PackageItem;
