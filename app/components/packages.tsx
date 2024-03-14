"use client";

import React, { useEffect } from "react";
import Container from "./common/container";
import clsx from "clsx";
import Header from "./common/header";
import PackageItem from "./package-item";
import { mockPackagesData } from "@/helpers/data";
import Modal from "./common/modal";
import { Package } from "@/types";
import useModal from "@/hooks/useModal";

interface IPackagesProps {
  className?: string;
}

const Packages: React.FC<IPackagesProps> = ({ className }) => {
  const [selectedPackage, setSelectedPackage] = React.useState<Package>();
  const { open, setOpen } = useModal();

  const onPackageClick = (id: number | string) => {
    const selected = mockPackagesData.find((p: Package) => p.id === id);
    if (!selected) return;
    if (selected?.id !== selectedPackage?.id) setSelectedPackage(selected);
    setOpen(true);
  };

  useEffect(() => {
    if (selectedPackage) setOpen(true);
  }, [selectedPackage, setOpen]);

  return (
    <>
      <Container className={clsx("px-4 md:px-0", className)}>
        <Header type="h1" className="text-4xl font-bold text-center">
          Pick your plan
        </Header>
        <Container className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 mt-12 max-w-[1000px]">
          {mockPackagesData.map((packageData) => (
            <PackageItem
              key={packageData.id}
              className="flex-1"
              onClick={onPackageClick}
              {...packageData}
            />
          ))}
        </Container>
      </Container>
      <Modal selectedPackage={selectedPackage} />
    </>
  );
};

export default Packages;
