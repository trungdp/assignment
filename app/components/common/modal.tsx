"use client";

import { FunctionComponent, useEffect, useRef } from "react";
import useModal from "@/hooks/useModal";
import { Package } from "@/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Header from "./header";
import { Form } from "./form/form";
import { getFieldsData } from "@/helpers/fields";

interface ModalProps {
  className?: string;
  setOpenModal?: () => void;
  selectedPackage?: Package;
}

const Modal: FunctionComponent<ModalProps> = ({
  className,
  selectedPackage,
}) => {
  const { open, setOpen } = useModal();
  const modalRef: any = useRef();
  const packegeForm = getFieldsData<any>(selectedPackage?.fields || []);

  const onSubmit = async (value: any) => {
    const payload = { ...value, package: selectedPackage?.name };

    await fetch("api/sheet/row", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setOpen(false);
  };

  const onCancelClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {open ? (
        <>
          <div className="bg-slate-800 opacity-50 absolute top-0 left-0 h-screen w-screen"></div>
          <div
            className={clsx(
              "flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
              className
            )}
          >
            <div className="relative my-4 mx-auto w-screen md:max-w-[460px]">
              <div
                ref={modalRef}
                className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <div className="p-4">
                  <Header type="h2" className="">
                    {selectedPackage?.name}
                  </Header>
                  <div
                    className="w-8 h-8 cursor-pointer p-1 rounded group hover:bg-slate-200 absolute top-0 right-0"
                    onClick={onCancelClick}
                  >
                    <XMarkIcon className="w-6 h-6 text-slate-400 group-hover:text-slate-500" />
                  </div>
                </div>

                <Form
                  {...packegeForm}
                  titleForm={selectedPackage?.name}
                  onSubmit={onSubmit}
                  labelButtonSubmit="Submit"
                ></Form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
