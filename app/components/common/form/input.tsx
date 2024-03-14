import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";
import { DynamicField } from "@/types";
import clsx from "clsx";

interface IInputProps extends DynamicField {
  className?: string;
}

const Input = ({ className, name, label, ...props }: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;
  const id = `${name}-${props.type}-${label}`;

  return (
    <div
      className={clsx("w-full relative flex gap-1 flex-col mb-4", className)}
    >
      {label && (
        <label className=" text-sm" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={clsx(
          "py-1 px-2 rounded w-full text-slate-800 border border-slate-300",
          error && "border-red-400"
        )}
        {...register(name)}
        {...props}
        id={id}
      />

      <ErrorMessage className="absolute -bottom-5 right-0" error={error} />
    </div>
  );
};

export default Input;
