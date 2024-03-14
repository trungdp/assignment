import clsx from "clsx";
import React from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

interface ButtonProps {
  className?: string;
  loading?: boolean;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ className, loading, label }) => {
  return (
    <button
      className={clsx(
        "text-white bg-slate-700 hover:bg-slate-900 font-bold px-6 py-3 rounded shadow outline-none focus:outline-none flex justify-center",
        loading && "cursor-not-allowed !bg-slate-700",
        className
      )}
      type="submit"
      disabled={loading}
    >
      {loading ? <ArrowPathIcon className="animate-spin w-6 h-6" /> : label}
    </button>
  );
};

export default Button;
